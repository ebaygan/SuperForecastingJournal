import React, { Component } from 'react';
import {View, TextInput, ListView, Text, Image} from 'react-native';
import styles from '../Styles/Styles.js'

var RealmTopicManager = require('../persistent_storage/RealmTopicManager.js');
var TopicManager = new RealmTopicManager.TopicManager();


export class DeleteTopicScreen extends Component<{}> {




constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(TopicManager.getTopicNames()),
    };
}

render() {
    return(
       <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => 

        	<View style={styles.listContainer}>

        	<Text style={styles.listRowFontLeft}>{rowData} <Image style={styles.listImageRight} source={require('../images/DeleteTopicScreen/Trashcan_furniture_icon.png')} /></Text>

          

        	</View>
        }
      />
    );
  }

}