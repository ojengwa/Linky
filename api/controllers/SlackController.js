/**
 * SlackController
 *
 * @description :: Server-side logic for managing slacks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Slack = require('slack-node'),
  SLACK_TOKEN = 'xoxb-5042464488-ZyJfh7rIoWssjXjfQhZJ4J01',
  validator = require('validator');

module.exports = {
  get: function (req, res) {
    console.log(SLACK_TOKEN);
    res.send(req);
  },

  post: function (req, res) {
    // console.log(req.body);
    var data = req.body,
      text = data.text,
      word = '',
      payload = [],
      tags = [];

    if (data.hasOwnProperty('token')) {
      console.log(data);
      payload = text.split(' ');
      word = payload[0];
      if (word.toLowerCase() === 'help') {
        res.send('Hello ' + data.user_name + ', to save a link please type the following.\
                 ```/link URL space seperated list of tags.\
                 \nEg: /link andela.co OurSite andela homepage \
                 \nThis data will be saved to http://andelink.mybluemix.net. Navigate ther to see all our links sorted out in other. :)\
                 ```');
      } else if (validator.isURL(word)) {
          var obj = {
            creator: data.user_name,
            url: word,
            extras: data
          };
          // delete payload[0];
          tags = payload.slice(1);
          Link.find({url: word}, function (err, found) {
            if (found.length == 0) {
              Link.create(obj, function (err, link) {
                if (err) {
                  res.send('Something went wrong. Try again. For more info, type `/link help`');
                } else {
                  for (tag in tags) {
                    Tag.create({name: tags[tag], url: link.id}, function (err) {
                      if (err) {
                        console.log(err);
                      }
                    });
                  }
                  res.send('URL: ' + word + ' saved successfully. for more info, type `/link help`');
                }
              });
            } else {
              res.send('This URL have been shared before. visit http://andelink.mybluemix.net/ to view shares.');
            }
          });
      } else {
          res.send('Invalid parameter(s). Please type for `/link help` for more info :)')
      }
      // var slack = new Slack(SLACK_TOKEN);
      // res.send("testing");
    }

    // res.send(req.body);
  }
};
