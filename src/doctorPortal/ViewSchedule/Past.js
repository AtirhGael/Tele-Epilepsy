import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper';
import data from '../Data';

const Past = () => {
  return (
    <View>
      <Text>yesteday </Text>
      <View style={{padding:15}}>
        <FlatList
        data={data}
        renderItem={({item})=>(
           <View>
           <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.image}/>
                    <View style={{gap:8}}>
                        <Text style={styles.name}> {item.name} </Text>
                        <Text style={styles.call}> Voice call</Text>
                        <Text style={styles.time}> 13:00 - 15:00 AM </Text>
                    </View>
                </View>
                <View style={{paddingTop:80, paddingRight:5}}>
                    <Text style={{fontWeight:'600'}} > Cancelled </Text>
                </View>
            </View>
            <View style={{height:10}} ></View>
           </View>
        )}
        />
      </View>
    </View>
  )
}

export default Past

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
        
    }
})