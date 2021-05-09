import React from 'react' 
import {View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, SafeAreaView} from 'react-native'; 
import { color } from 'react-native-reanimated';

//16478b
const MainScreen = ({navigation}) => {

    return (
        <ImageBackground 
        source={require('./pics/img3.jpg')} 
        style={styles.image}>
         <View style={styles.Container}>
          <Text 
           style ={{
               fontSize:30,
               fontWeight:'bold',
               color: 'white',
               alignSelf: 'center',
               marginTop:30
               }}>Genetic Learning Workshop
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#00d0b6',
              width: 400,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
              margin:20
            }}
            
              onPress={() =>  navigation.navigate('DNA')}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontSize:30}}>
              DNA
            </Text>
          </TouchableOpacity>  

          <TouchableOpacity
            style={{
              backgroundColor: '#00d0b6',
              width: 400,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
              margin:20
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontSize:30}}>
              Genes And Chromosomes
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
              backgroundColor: '#00d0b6',
              width: 400,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
              margin:20
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontSize:30}}>
              Cellular Reproduction
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#00d0b6',
              width: 400,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
              margin:20
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontSize:30}}>
              DNA Replication
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#00d0b6',
              width: 400,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
              margin:20
             }}
             onPress={() =>  navigation.navigate('Heredity')}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontSize:30}}>
              Herdity Calculator
            </Text>
          </TouchableOpacity>

        </View>
        </ImageBackground>
    )}
    export default MainScreen;
    const styles = StyleSheet.create({
        container: {
            flex: 1
            },
            image: {
              flex: 1,
              width: "100%",
              height: 700,
            },
            tex:{
                fontSize:25,
                color: 'white'
            },
            touchOp :{
                 backgroundColor:'deepskyblue',
                 borderRadius:20,
                 margin:10,
                 marginTop:25
                 
            }
        });
    