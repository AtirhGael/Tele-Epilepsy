import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import data from '../Data'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Upcoming = () => {
    const navigation = useNavigation();
  return (
    <View>
        
      <Text>Today, january 08 2020</Text>
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
                <TouchableOpacity onPress={()=>navigation.navigate('appointment',item)} >
                <View style={styles.icon}>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{height:10}} ></View>
           </View>
        )}
        />
      </View>
    </View>
  )
}

export default Upcoming

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
        paddingRight:5,
        
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
    icon:{
        height:35,
        width:35,
        borderRadius:4,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',

    }
})