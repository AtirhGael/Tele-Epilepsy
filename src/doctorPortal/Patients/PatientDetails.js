import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
import { Link, useRoute } from '@react-navigation/native';
import { Appbar,Button } from 'react-native-paper';
import { FontAwesome5,Feather,Ionicons } from '@expo/vector-icons';

const PatientDetails = ({navigation}) => {
    const route = useRoute()
    const id = route.params
    // console.log(id);
    
// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
        <View >
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack()} size={30}/>
                <View style={styles.left}>
                <FontAwesome5 name="rocketchat" size={30} color="#088be9" />
                <FontAwesome5 name="video" size={30} color="#088be9"/>
                <Ionicons name="ios-call" size={30} color="#088be9" />
                </View>
            </Appbar.Header>
      </View>
      <ScrollView>
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
                <Text style={{fontSize:15, fontWeight:'400'}}> {route.params.sicknesType}</Text>
                <Text style={{fontSize:15}}> {route.params.address}</Text>
            </View>
    
            <Button
                onPress={()=> navigation.navigate('patientInfo',id)}
             style={{paddingTop:30,paddingRight:10,}}>
                <Text style={{fontSize:20}}>View</Text>
            </Button>
        </View>
      </View>
      <View style={styles.body}>
      <View style={{
            paddingTop:25,

        }}>
            <Text style={styles.upcoming}> Medications</Text>
        </View>

        <View style={styles.button}>
            <Button  mode="contained" style={{ height:45,}} onPress={() => navigation.navigate('booking')}>
                Schedule Apointment
            </Button>
            <Button  style={styles.btn2} onPress={() => navigation.navigate("prescriptions") }>
                Asign Drugs
            </Button>
        </View>
      </View>
        </ScrollView>
    </View>
  )
}

export default PatientDetails

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:100,
        borderColor:'gray',
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
        marginRight:80,
        gap:5,
    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        gap:10,
        justifyContent:'flex-end',
        paddingTop:250
    },
    header:{
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'space-between',
    },
    left:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        paddingRight:20
    },
    body:{
        padding:20
    },
    btn2:{
        height:45,
        borderWidth:1,
        borderColor:'#7851a9'
    }
})