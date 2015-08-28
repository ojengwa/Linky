/**
* Link.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    creator: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: true,
      url: true
    },
    extras: {
      type: 'json'
    },
    tags: {
      collection: 'tag',
      via: 'url',
      dominant: true
    }
  }
};

