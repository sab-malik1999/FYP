import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
const Heredity = ({navigation}) => {
  return (  
    <View
      style={{flex: 1, backgroundColor: 'grey'}}>
          <Text
           style={{
               fontSize: 30,
               top:1,
               justifyContent:'center',
               backgroundColor: '#ADD8E6',
               borderRadius: 20,
               margin:50,
               width:300,
               height:80,
               alignSelf: 'center',
               textAlign: 'center',
               textAlignVertical:'center',
               color: 'black',
               fontWeight:'bold'
           }}
          >Heredity Calculator</Text>
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#ADD8E6',
          borderRadius: 15,
          margin: 10,
          justifyContent: 'space-evenly',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0FFFF',
              width: 150,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontWeight: 'bold', fontSize:15}}>
              Cleft Chin Gene
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0FFFF',
              width: 150,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black',fontWeight: 'bold', fontSize:15}}>
              Eye Color Calculator
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0FFFF',
              width: 150,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontWeight: 'bold', fontSize:15}}>
              Dimple Gene
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0FFFF',
              width: 150,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontWeight: 'bold', fontSize:15}}>
              Ear Lobe Gene
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0FFFF',
              width: 150,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontWeight: 'bold', fontSize:15}}>
              Widow's Peak Gene
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0FFFF',
              width: 150,
              height: 50,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontStyle: 'italic', color: 'black', fontWeight: 'bold', fontSize:15}}>
              Blood Type Calculator
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};
export default Heredity;