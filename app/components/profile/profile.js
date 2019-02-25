import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import HeaderBar from '../common/headerBar';


export default class Profile extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
          <HeaderBar navigation={this.props.navigation}/>
        <Image style={styles.header} source={require('../Images/wall.jpg')} />
        <Avatar style={styles.avatar}
        size="xlarge"
        rounded
        showEditButton='true'
        editButton={{color:'black' }}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          onEditPress=''
        />
  
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam.
               Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text onPress={this._onPressButton} >Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130, 
    height: 130,
    // borderRadius: 63,
    // borderWidth: 4,
    // borderColor: "red",
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  }
});