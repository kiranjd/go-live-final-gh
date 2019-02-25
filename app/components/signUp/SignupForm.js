import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SignupForm extends Component {
    render() {
        return (
            <View  style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                backgroundColor: '#3358ff'
            }}>
                <Input 
                    placeholder="Username" 
                    leftIcon={
                        <Icon
                          name='user'
                          size={24}
                          color='black'
                        />
                      }
                      placeholderTextColor="#fff"
                      
                    returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType=""
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <Input 
                    placeholder="First Name" 
                    leftIcon={
                        <Icon
                          name='user'
                          size={24}
                          color='black'
                        />
                      }
                    placeholderTextColor="#fff"
                    
                    returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType=""
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <Input 
                    placeholder="Last Name" 
                    leftIcon={
                        <Icon
                          name='user'
                          size={24}
                          color='black'
                        />
                      }
                    placeholderTextColor="#fff"
                    
                    returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType=""
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <Input 
                    placeholder="Email" 
                    leftIcon={
                        <Icon
                          name='paper-plane'
                          size={24}
                          color='black'
                        />
                      }
                    placeholderTextColor="#fff"
                    
                    returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <Input 
                    secureTextEntry
                    placeholder="Password" 
                    leftIcon={
                        <Icon
                          name='asterisk'
                          size={24}
                          color='black'
                        />
                      }
                    placeholderTextColor="#fff"
                    
                    returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType=""
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <Input 
                    secureTextEntry
                    placeholder="Confirm Password" 
                    leftIcon={
                        <Icon
                          name='asterisk'
                          size={24}
                          color='black'
                        />
                      }
                    placeholderTextColor="#fff"
                    
                    returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType=""
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                <Text 
                    style={styles.buttonText} 
                    onPress={() => this.props.navigation.navigate('Home')}
                >Submit</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#3358ff'
    },

    input: {
        height: hp('5%'),
        marginBottom: hp('3%'),
        marginHorizontal: wp('8%'),
        borderBottomColor: '#fff',
        color: '#fff'
    },

    buttonContainer: {
        padding: '1%',
        margin: wp('3%'),
        backgroundColor: "#FFBB34",
        
    },

    buttonText: {
        textAlign: 'center',
        color: '#3358ff',
        fontWeight: '900',
        fontSize: wp('5%'),
    },
});