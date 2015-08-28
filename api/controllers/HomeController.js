/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function(req, res) {
        Tag.find()
        .exec(function(err, tags) {
            Link.find()
            .populate('tags')
            .exec(function(err, links){
                // console.log(console.dir(links[2].tags[0]));
                res.view('homepage', {
                    tags: tags,
                    links: links
                });
            })
        });
    },

    tags: function(req, res) {
        var name = req.param('name');
        // console.log(name);
        // // Link.find()
        // // .populate('tags')
        // Tag.find({'name': name})
        // .populate('url')
        // // .where({'extras': {'contains': name }})
        // .exec(function(err, links){
        //     console.log(links);
        //     res.view('tag', {
        //         links: links
        //     });
        // });
        Tag.find()
        .exec(function(err, tags) {
            Tag.find({'name': name})
            .populate('url')
            .exec(function(err, links){
                // console.log(links[0].populate('tags'));
                res.view('tag', {
                    tags: tags,
                    links: links
                });
            })
        });
    }
};

