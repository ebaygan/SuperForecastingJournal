import React, { Component } from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import styles from '../Styles/Styles.js'

export var NameString = 'Please insert topic name';
var RealmTopicManager = require('../persistent_storage/RealmTopicManager.js');
var TopicManager = new RealmTopicManager.TopicManager();

export class CreateTopicScreen extends Component<{}> {




render() {
      return <View style={styles.mainviewStyle}>
        <ContainerView/>
      <View style={styles.toolbar}>
      <Text style={styles.toolbarLeft} />

        <Button
        style={styles.toolbarCenter}
            title="Create Topic"
             color="#FFFFFF"
            onPress={this.createTopic}    
            accessibilityLabel="Create new topic"
        />
        <Text style={styles.toolbarRight} />
        
        </View>
      </View>;
}

createTopic() {
	TopicManager.createTopic(NameString);

}


}



class ContainerView extends React.Component {
constructor(props) {
      super(props);
      this.state = {text: NameString} ;
}

setState(name) {
	super.setState(name);
	NameString = name;
}

render() {
    return(
       <TextInput 
       onChangeText={(text) => this.setState({text})}
        value={this.state.text}
       />
    );
  }
}
