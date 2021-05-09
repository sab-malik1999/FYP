import React, { useState } from 'react' 
import {View,Text,StyleSheet, TextInput, TouchableOpacity,ImageBackground} from 'react-native' 

const SignUpScreen = ({navigation}) => {

return (
    <View style={styles.Container}>
      <ImageBackground source={require('./pics/img3.jpg')} style={styles.image}></ImageBackground>
      
      
        <TextInput
        style={styles.input}
        placeholder="First Name"
        keyboardType="default"
        marginTop={110}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        keyboardType="default"
        
      />

<TextInput
        style={styles.input}
        placeholder="Gender"
        keyboardType="default"
        
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button}
       onPress={() =>  navigation.navigate('')}> 
      <Text style={{fontSize:20}}>SignUp</Text> 
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    marginLeft:150,
    padding: 10,
    width: 100,
    borderRadius: 20
    },
  container: {
      flex: 1,
      alignItems: "center",
      
    },
    image: {
      flex: 1,
      width: "100%",
      height: 700,
    },   
  countContainer: {
      alignItems: "center",
      padding: 10
    }  
});
 export default SignUpScreen; 