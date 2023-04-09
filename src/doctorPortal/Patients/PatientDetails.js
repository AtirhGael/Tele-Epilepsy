import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Link, useRoute } from '@react-navigation/native';
import { Appbar,Button } from 'react-native-paper';

const PatientDetails = ({navigation}) => {
    const route = useRoute()
    const id = route.params
    // console.log(id);
  return (
    <View>
        <View >
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="All Patients"  />
                <Appbar.Action icon="calendar" onPress={() => {}} />
                 <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
      </View>
      <View style={styles.container}>
        <View style={styles.inner}>
            <Image source={route.params.image} 
                style={{
                    height:'100%',
                    width:110,
                    resizeMode:'stretch'
                }}
             />
            <View style={styles.text}>
                <Text style={{fontSize:22, fontWeight:'bold',}}> {route.params.name}</Text>
                <Text style={{fontSize:15}}> {route.params.sicknesType}</Text>
                <Text style={{fontSize:15}}> {route.params.address}</Text>
            </View>
    
            <Button
                onPress={()=> navigation.navigate('patientInfo',id)}
             style={{paddingTop:30,paddingRight:10,}}>
                View
            </Button>
        </View>
      </View>
      <View style={{
            paddingTop:25,

        }}>
            <Text style={styles.upcoming}> Medications</Text>
        </View>

        <View style={styles.button}>
            <Button icon="av-timer" mode="contained" style={{ height:40}} onPress={() => navigation.navigate('booking')}>
                Schedule Apointment
            </Button>
            <Button icon="medical-bag" style={{backgroundColor:'red', height:40}} onPress={() => navigation.navigate("prescriptions") }>
                asign Drugs
            </Button>
        </View>
    </View>
  )
}

export default PatientDetails

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:100,
        // borderColor:'gray',
        borderWidth:  2,
        marginTop:20,
        marginLeft:15,
        borderRadius:10,
    },
    inner:{
        display:'flex',
        flexDirection:'row',
        height:'100%',
        justifyContent:'space-between'
    },
    text:{
        paddingTop:5,
        marginRight:60,
        gap:5,
    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        gap:10,
        justifyContent:'flex-end',
        padding:20,
        marginTop:300,
    }
})