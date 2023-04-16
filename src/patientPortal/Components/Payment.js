import { StyleSheet, Text, View,TextInput, ScrollView, } from 'react-native'
import React,{useRef, useState} from 'react'
import { Appbar,Button } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Pupup from './Popup';
import Fpopup from './Fpopup';

const Payment = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");

    const pickerRef = useRef()

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }
   
  return (
    <View style={{ backgroundColor:"#fff",flex:1}}>
       <View>
            <Appbar.Header style={{ backgroundColor:"#fff",padding:20,}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} size={35} /> 
                <Appbar.Content title="Payment" titleStyle={{fontSize:25}} ty />
            </Appbar.Header>
        </View>
        
        <View style={styles.container}>
        <View >
         <View style={styles.text}>
         <Text style={styles.txt1}>  Choose your payment method below</Text>
            <Text style={styles.txt}>  After confirmation, 0.000FCFA will be deducted as charges for your bookin appointment. </Text>
          </View>
         </View>
         <View style={{paddingTop:20}}>
            <Text style={styles.inputText1}>Payment Method:</Text>
           
            <View style={styles.container1}>
                <Picker
                    ref={pickerRef}
                    prompt='Payment Method'
                    selectedValue={selectedValue}
                    style={{ height: 60, width: 220 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    
                    <Picker.Item label="MTN Mobile Money" value="java" />
                    <Picker.Item label="ORANGE Mobile Money" value="js" />
                    {/* <Picker.Item label="Payment Method" value="java" /> */}
                </Picker>
                </View>
         </View>
        <View style={styles.inputes}>
            <Text style={styles.inputText}>Input Payment Phone Number</Text>
            <TextInput
            style={styles.input}
            placeholder='650292489'
            placeholderTextColor='black'
            keyboardType='phone-pad'
            
            />
        </View>
        </View>
       
        <Pupup
        name='Pay Now'
        />
        {/* for failed payments, use <Fpopup/> */}
    </View>
  )
}

export default Payment

// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

const styles = StyleSheet.create({
    container:{
        padding:15, 
        gap:10,
    },
    inputText1:{
        paddingLeft:15,
        fontSize:18,
        fontWeight:'400',
        paddingBottom:10,
    },
    inputText:{
        paddingLeft:15,
        fontSize:18,
        fontWeight:'500',
        paddingBottom:10,
    },
    input:{
        borderWidth:2,
        height:50,
        width:'100%',
        borderRadius:25,
        padding:8,
        borderColor:'#7851a9',
    },
    inputes:{
        top:20
    },
    text:{
        height:200,
        width:'100%',
        backgroundColor:'#7851a9',
       display:'flex',
        borderRadius:15,
        padding:10
      },
      txt:{
        fontSize:15,
        fontWeight:'400',
        textAlign:'center',
        color:'#fff',
        top:29
      },
      txt1:{
        fontSize:20,
        fontWeight:'400',
        textAlign:'center',
        color:'#fff'
      },
      container1: {
        left:30,
      },
      btnSection:{
        padding:20,
        top:30,
        gap:5,
        width:'100%',
        justifyContent:'center',
        top:70
    },
    btn:{
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#7851a9',
        backgroundColor:'#7851a9',
        justifyContent:'center'
    },
    btnText:{
        color:'#fff',
        fontSize:20,
        alignItems:'center',
        fontWeight:'400',
        textAlign:'center'
    }
    
})