import React from 'react' 
import {View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, SafeAreaView} from 'react-native'; 

const LoginScreen = ({navigation}) => {
    
   
  
    return (
      
      <View style={styles.Container}>
        <ImageBackground source={require('./pics/img3.jpg')} style={styles.image}></ImageBackground>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          marginTop={200}
          
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          keyboardType="default"
          returnKeyType='go'
          secureTextEntry
          autoCorrect={false}
          
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:20}}>Login</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.Signup}
         onPress={() =>  navigation.navigate('SignUp')}> 
        <Text style={{fontSize:20}}>Sign Up</Text> 
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
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginBottom: 10,
        marginLeft:150,
        padding: 10,
        width: 100,
        borderRadius: 20
      },
    container: {
      flex: 1
      },
      image: {
        flex: 1,
        width: "100%",
        height: 700,
      },  
    Signup: {
      alignItems: "center",
      backgroundColor: "red",
      padding: 10,
      marginBottom: 10,
      marginLeft:150,
      padding: 10,
      width: 100,
      borderRadius: 20
      },
    countContainer: {
        alignItems: "center",
        padding: 10
      }  
  });

export default LoginScreen; 
