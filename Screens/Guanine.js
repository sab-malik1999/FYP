// import React,{Component} from 'react';
// import { useState } from 'react';
// import {View,Text, Image, StyleSheet, checkbox, Animated, SafeAreaView, TouchableHighlight, Easing} from 'react-native';


// const Guanine = ({navigation}) => {
//     let rotateValueHolder = new Animated.Value(0);

//     const startImageRotateFunction = () => {
//       rotateValueHolder.setValue(0);
//       Animated.timing(rotateValueHolder, {
//         toValue: 1,
//         duration: 3000,
//         easing: Easing.linear,
//         useNativeDriver: true
//       }).start();
//     };

  
    
    
  
//     const RotateData = rotateValueHolder.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '360deg'],  
//     }); 
//     return(
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={{flex:1, top:20}}>
//             <Text 
//               style={{
//                 fontSize:25,
//                 fontWeight:'bold',
//                 paddingLeft:20,
//                 paddingTop:10
//                 }}>Adenine(A):</Text>

//             <Text
//               style={{
//                 fontSize:23,
//                 paddingLeft:20
//                 }}>Adenine is a purine nucleobase with an amine group attached to the carbon at position 6.
//              Adenine is the precursor for adenosine and deoxyadenosine nucleosides.Adenine is the parent 
//              compound of the 6-aminopurines, composed of a purine having an amino group at C-6. 
//              </Text>
//             <View style={{flexDirection:'row', top:7}}>     
//              <Text 
//                style={{
//                  fontSize:23,
//                  fontWeight:'bold',
//                  flexDirection:'row',
//                  paddingLeft:20
//                  }}>Molecular Formula:
//               </Text>

//               <Text 
//                 style={{
//                   top:1,
//                   left:10,
//                   fontSize:23
//                   }}>	C5H5N5</Text>
//             </View>
//             <View style={{flexDirection:'row', top:14}}>     
//              <Text 
//                style={{
//                  fontSize:23,
//                  fontWeight:'bold',
//                  flexDirection:'row',
//                  paddingLeft:20
//                  }}>Molecular Weight:
//               </Text>

//               <Text 
//                 style={{
//                   top:1,
//                   left:10,
//                   fontSize:23
//                   }}>135.13 g/mol</Text>
//             </View>
//           </View>
          
         
//            <TouchableHighlight
//               onPress={startImageRotateFunction}
//               style={styles.buttonStyle}>
//               <Text style={styles.buttonTextStyle}>
//                 Animate
//               </Text>
//             </TouchableHighlight>
           
//        </SafeAreaView>
//        );
//        };
//     export default Guanine;
//     const styles = StyleSheet.create({
//         container: {
//           flex:1,
//           padding: 20,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#C2C2C2',
//         },
//         titleText: {
//           fontSize: 22,
//           textAlign: 'center',
//           fontWeight: 'bold',
//           padding: 20,
//         },
//         buttonStyle: {
//           fontSize: 16,
//           color: 'white',
//           backgroundColor: 'blue',
//           padding: 5,
        
//           minWidth: 250,
//         },
//         buttonTextStyle: {
//           padding: 5,
//           color: 'white',
//           textAlign: 'center',
//         },
//       });

  import React from 'react';
  import {View,Text, Image} from 'react-native';

  const Guanine=()=>{
    return(
      <View style={styles.container}>
        <Text>Hello World!</Text>
        
{/* 
        <Image
        
         source={require('../pics/gu.png')}
         style={styles.tinyLogo}/> */}
{/*  */}
      </View>
    )
  }
  
export default Guanine;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});