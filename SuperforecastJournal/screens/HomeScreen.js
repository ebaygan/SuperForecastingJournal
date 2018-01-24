import React, { Component } from 'react';
import styles from '../Styles/Styles.js'
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

