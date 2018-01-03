import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  Console
} from 'react-native';

export class HomeScreen extends Component<{}> {

constructor() {
  super();
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };

}

onCreateNew = () => {
    console.log('this is:', this);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={styles.welcome}>
          Select your topic
        </Text>
        <Button
            title="Create Topic"
            onPress={() =>
          navigate('CreateTopicScreen', { name: 'Jane' })
        }
            color="#003300"
            accessibilityLabel="Create new topic"
            style={styles.button}
        />
        <View style={styles.button}>
        <Button
            title="Delete Topic"
            
            onPress={() =>
          navigate('DeleteTopicScreen', { name: 'Jane' })
        }
            color="#400000"
        />
        </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 250,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});