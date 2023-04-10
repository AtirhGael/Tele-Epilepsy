import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {Appbar,Divider} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';

const Menu = ({navigation}) => {
  return (
    <View>
       <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Profile"  />
                </Appbar.Header>
           <View style={{padding:20}}>
           <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={require('../../assets/1.png')} style={styles.image}/>
                    <View style={{gap:8}}>
                        <Text style={styles.name}> Dr. Gael </Text>
                        <Text style={styles.call}> Medicine Specialist</Text>
                        <Text style={styles.time}> Good Clinic and Health, Bamenda </Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <Text style={{fontWeight:'600'}} > </Text>
                </View>
            </View>
            <View style={{height:10}} ></View>
           </View>

           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Contact Us</Text>
            <AntDesign name="right" size={35} color="black" onPress={()=>navigation.navigate('contact')} />
           
           </View>
           <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
            }}/>
           </View>
           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <AntDesign name="right" size={35} color="black" onPress={()=>navigation.navigate('terms')} />
           
           </View>
           <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
            }}/>
           </View>
           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Privacy Policy</Text>
            <AntDesign name="right" size={35} color="black"
            onPress={()=>navigation.navigate('policy')}
             />
           
           </View>
           <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
            }}/>
           </View>

           <View style={{ padding:20,gap:15}}>
           <View style={styles.line}>
            <Text style={styles.title}>Logout</Text>
            <AntDesign name="right" size={35} color="red" />
           
           </View>
           </View>
           

        
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  main:{
    display:'flex',
    flexDirection:'row',
    // alignItems:'baseline',
    justifyContent:'space-between',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:10,
    
},
container:{
    display:'flex',
    // justifyContent:'space-between',
    flexDirection:'row',
    gap:20,
    alignItems:'center'
},
image:{
    height:110,
    width:100,
    resizeMode:'stretch',
},
name:{
    fontSize:22,
    fontWeight:'800'
},
call:{
    fontSize:18,
    
},
icon:{alignItems:'center',justifyContent:'center', paddingRight:5},
line:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
 
  alignItems:'center'
},
title:{
  fontSize:20,
}
})