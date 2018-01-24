import React, { Component } from 'react';

const Realm = require('realm');

class Topic {}
Topic.schema = {
    name: 'Topic',
    primaryKey: 'key',
    properties: {
        name: 'string',
        key: 'string'
    },
};

const topicManager = new Realm({schema: [Topic]});

// Query
//let people = realm.objects('Person', 'age >= 17');
//people.length // => 0

//Write
topicManager.write(() => {
    // savedTopic = topicManager.create('Topic', {
    //     name: 'Hal Incandenza',
    // });
});

export class RealmTopicManager {

    createTopic() {
         savedTopic = topicManager.create('Topic', {
             key: uuidv4(),
             name: 'Hal Incandenza',
         });
    }

    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

}

// Queries are updated in real-time
//people.length // => 1

//let topics = RealmTopicManager.objects('Topic');
