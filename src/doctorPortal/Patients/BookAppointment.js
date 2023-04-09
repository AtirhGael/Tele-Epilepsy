import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Appbar, Button} from 'react-native-paper'
import { ScrollView } from 'react-native'

const BookAppointment = ({navigation}) => {
    const [active, setInactive] =  useState('inactive')

    function activeState(){
        setInactive("active")
    }
  return (
    <View>
        <ScrollView>
       <View >
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Book Appointment"  />
                
            </Appbar.Header>
      </View>
      <Text style={{fontSize:21,padding:10}}> Wednesday, April 5 2023 </Text>
     
      <View style={styles.button}>
            <Button style={ active ==='inactive'? styles.btnActive: styles.btnInactive } onPress={activeState}>
                Morning
            </Button>
            <Button style={ active ==='inactive'? styles.btnActive: styles.btnInactive } onPress={activeState}>
                 Evening
            </Button>
        </View>
        <Text style={{fontSize:21,padding:10}}> Choose the Hour </Text>
        <View style={styles.button}>
            <Button icon="av-timer" mode="contained" style={{ height:50, width:120}} onPress={() => navigation.navigate('booking')}>
                Morning
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:50, width:120}} onPress={() => navigation.navigate("prescriptions") }>
                 Evening
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:50, width:120}} onPress={() => navigation.navigate("prescriptions") }>
                 Evening
            </Button>
        </View>
        <View style={styles.button}>
            <Button icon="av-timer" mode="contained" style={{ height:50, width:120}} onPress={() => navigation.navigate('booking')}>
                Morning
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:50, width:120}} onPress={() => navigation.navigate("prescriptions") }>
                 Evening
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:50, width:120}} onPress={() => navigation.navigate("prescriptions") }>
                 Evening
            </Button>
        </View>
        <View style={styles.button}>
            <Button icon="av-timer" mode="contained" style={{ height:50, width:120}} onPress={() => navigation.navigate('booking')}>
                Morning
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:50, width:120}} onPress={() => navigation.navigate("prescriptions") }>
                 Evening
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:50, width:120}} onPress={() => navigation.navigate("prescriptions") }>
                 Evening
            </Button>
        </View>
        <View style={{padding:10,marginTop:80}}>
        <Button icon="medical-bag"  mode="contained" style={{ height:50,}} onPress={() => navigation.navigate("prescriptions") }>
            Confirm Apointment
        </Button>
        </View>
        </ScrollView>
    </View>



  )
}

export default BookAppointment

const styles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        padding:10,
        justifyContent:'center',
        flexWrap:'wrap',
        
    },
    btnActive:{
        height:40,
        width:100,
        backgroundColor:'red',
        borderColor:'gray',
        borderWidth:1,
    },
    btnInactive:{
        height:40,
        width:100,
        backgroundColor:'white',
        borderColor:'gray',
        borderWidth:1,
    }
})