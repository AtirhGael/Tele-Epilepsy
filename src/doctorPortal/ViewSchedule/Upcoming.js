import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import data from '../Data'
import { AntDesign } from '@expo/vector-icons';


const Upcoming = () => {
  return (
    <View>
      <Text>Today, january 08 2020</Text>
      <View style={styles.main}>
        <FlatList
        data={data}
        renderItem={({item})=>(
            <View style={{paddingBottom:10}}>
                <View style={styles.container}>
                    <View style={styles.textarea}>
                        <Image source={item.image} style={styles.image} />
                        <View>
                        <Text style={styles.textname}> { item.name}</Text>
                        <Text style={styles.text}> Video call</Text>
                        <Text style={styles.text}> 13:00 - 13:30 PM</Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                    <AntDesign name="right" size={24} color="white" />
                    </View>
                </View>
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
        paddingLeft:10,
        alignItems:'center'
    },
    container:{
        height:130,
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // alignItems:'center',
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
    },
    textarea:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textname:{
        fontSize:30,
        flexWrap:'wrap',
        fontWeight:'bold',
    },
    image:{
        height:"90%",
        width:'40%',
        resizeMode:'stretch',
        borderRadius:10
    },
    text:{
        fontWeight:'400',
    },
    icon:{
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        height:'30%',
        width:30,
        borderRadius:2,
       
    }
})