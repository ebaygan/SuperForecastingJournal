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
  

}


  static navigationOptions = {
    title: 'Select your topic',
    headerTintColor: '#003300',
  }

onCreateNew = () => {
    console.log('this is:', this);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainviewStyle}>

     


        <ContainerView/>



        <View style={styles.toolbar}>
        <Text style={styles.toolbarLeft}></Text>
        <Button
        style={styles.toolbarButton}
            title="Create Topic"
             color="#FFFFFF"
            onPress={() =>
          navigate('CreateTopicScreen', { name: 'Jane' })
        }
            
            accessibilityLabel="Create new topic"
        />

        <Text style={styles.toolbarCenter}></Text>
        
        <Button
            title="Delete Topic"
            style={styles.toolbarButton}
            color="#FFFFFF"
            onPress={() =>
          navigate('DeleteTopicScreen', { name: 'Jane' })
        }
            
        />
        <Text style={styles.toolbarLeft}></Text>
        </View>
        
      </View>
    );
  }
}

class ContainerView extends React.Component {
constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
}

render() {
    return(
       <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
        position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  height:70,
  bottom: -10,
        backgroundColor:'#003300',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    mainviewStyle: {
  flex: 1,
  flexDirection: 'column',
},
    toolbarButton:{
        width: 50,            //Step 2
        backgroundColor:'#003300',
        textAlign:'center',
        marginHorizontal: 10
    },
    toolbarCenter:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },
    toolbarLeft:{
        color:'#fff',
        textAlign:'left',
        fontWeight:'bold',
        flex:1                //Step 3
    },
    toolbarRight:{
        color:'#fff',
        textAlign:'right',
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