import { ScrollView, StyleSheet, Text, View,Image, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {Appbar,Avatar} from 'react-native-paper'
import { useRoute } from '@react-navigation/native'


const MyAppoinments = ({navigation}) => {
   const route =  useRoute()
  return (
    <ScrollView>
        <View>
        <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="My Appoinments"  />
                <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
      <View style={styles.center}>
        <Text style={styles.session}>Start Session</Text>
        <Avatar.Image size={250} source={route.params.image}/>
        <Text style={styles.name}>{route.params.name}</Text>

      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Edit Appoinments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default MyAppoinments

const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        paddingTop:60
    },
    session:{
        paddingBottom:15,
        fontSize:20
    },
    name:{
        paddingTop:10,
        fontSize:29,
    },
    button:{
        gap:10,
        padding:12,

    },
    btn:{
        height:60,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
    btnText:{
        fontSize:23,
        color:'white'
    }
 
})