import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Prescription from './Prescription'
import { Appbar, Button } from 'react-native-paper';

const Prescribe = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
       <View style={{height:'13%',}}>
       <View>
            <Appbar.Header style={{ backgroundColor:"#fff",}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} size={35} /> 
                <Appbar.Content title="Prescription" titleStyle={{fontSize:25}} ty />
            </Appbar.Header>
        </View>
       </View>
        <View s>
       
            < Prescription /> 
        </View>

        </View>
  )
}

export default Prescribe

const styles = StyleSheet.create({
    btnSection:{
        padding:20,
        top:10,
        gap:5,
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center'
    },
    btn:{
        height:60,
        width:'50%',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#7851a9',
        backgroundColor:'#7851a9',
        justifyContent:'center'
    },
    btnInactive:{
        height:120,
        width:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#7851a9'
    },
    btnText:{
        color:'#fff',
        fontSize:20,
        alignItems:'center',
        fontWeight:'400',
        textAlign:'center'
    }
})