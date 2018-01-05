import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  Console,
  Dimensions
} from 'react-native';

export class HomeScreen extends Component<{}> {

constructor() {
  super();
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };

}

static navigationOptions = {
    title: 'Select your topic',
  }

onCreateNew = () => {
    console.log('this is:', this);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <View style={styles.toolbar}>
        <Button
        style={styles.toolbarButton}
            title="Create Topic"
            onPress={() =>
          navigate('CreateTopicScreen', { name: 'Jane' })
        }
            
            accessibilityLabel="Create new topic"
        />
        
        <Button
            title="Delete Topic"
            style={styles.toolbarButton}
            onPress={() =>
          navigate('DeleteTopicScreen', { name: 'Jane' })
        }
            
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
  toolbar:{
        backgroundColor:'#003300',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        backgroundColor:'#003300',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
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