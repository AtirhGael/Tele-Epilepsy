import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {Appbar,Button } from 'react-native-paper'

const PatientRegistration = ({navigation}) => {
    const route = useRoute()

  return (
    <View>
        <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={route.params.name}  />
               
                <Image source={route.params.image}
                style={styles.image}
                 />
            </Appbar.Header>
       
            <View style={{
            paddingTop:25,
            paddingLeft:10,

        }}>
            <Text style={styles.upcoming}>Registration Information</Text>
        </View>
        <View style={{ padding:20,marginTop:400 }}>
        <Button  mode="contained" style={{ height:45}}>
                Confirm Prescription
            </Button>
        </View>

      <Text></Text>
    </View>
  )
}

export default PatientRegistration

const styles = StyleSheet.create({
    header:{
        height:100,
        marginRight:10,
    },
    image:{
        height:66,
        width:66,
        borderRadius:33,
        resizeMode:'stretch',
        
    },
    upcoming:{
        fontSize:20,
        fontWeight:'bold'
    },
})