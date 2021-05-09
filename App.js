import React, {useEffect} from 'react'; 
import {View, Text, StyleSheet, ImageBackground } from 'react-native'; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack'; 
import LoginScreen from './LoginScreen'; 
import SignUpScreen from './SignUpScreen'; 
import MainScreen from './MainScreen' 
import Adenine from './Screens/Adenine';
import DNAScreen from './DNAScreen';
import Heredity from './Screens/Heredity';
import Guanine from './Screens/Guanine';

const Stack = createStackNavigator(); 
function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
  return (
    <View 
      style={{
       backgroundColor: 'yellow',
       alignItems: 'center',
       marginTop: 50
       }}>
      <ImageBackground source={require('./pics/img3.jpg')} style={styles.image}></ImageBackground>
      <Text 
        style={{
          fontSize:30,
          color: 'white'
          }}>
          Welcome to Genetic Learning Workshop
      </Text>
    </View>
  );
}
 
 function App() { 
   return ( 
   <NavigationContainer> 
      <Stack.Navigator> 
      { /*<Stack.Screen name="Login" component={LoginScreen} />  */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */
         }
        <Stack.Screen name="splash_Screen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={MainScreen} /> 
        <Stack.Screen name="DNA" component={DNAScreen} /> 
        <Stack.Screen name="Adenine" component={Adenine} />
      
        <Stack.Screen name="Heredity" component={Heredity}></Stack.Screen>
        

        
      </Stack.Navigator> 
        
    </NavigationContainer> 
  
  ); 

} 

export default App;
 const styles=StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: 700
  }
  });
//   import React from 'react';
//   import {View,Text} from 'react-native';
//   const App=()=>{
//     return(
//       <View style={{flex:1}}>
//         <Text>Hello World!</Text>
//       </View>
//     )
//   }
// export default App;