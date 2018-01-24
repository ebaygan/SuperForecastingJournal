import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    toolbarCenterContainer:{
        position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  height:70,
  bottom: -10,
        backgroundColor:'#003300',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
          //Step 1
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