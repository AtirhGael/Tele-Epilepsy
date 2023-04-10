import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import {Appbar, Button} from 'react-native-paper'
import { ScrollView } from 'react-native'

const Prescription = ({navigation}) => {
    const [text,setText] = useState('')
  return (
    
    // Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c

    <View style={{flex:1, backgroundColor:"#fff"}}>
        
      <View >
            <Appbar.Header style={{ backgroundColor:"#fff"}}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Presccriptions"  />
               
            </Appbar.Header>
      </View>
      <ScrollView>
      <View style={styles.textinputs}>
        <View>
            <Text style={styles.text}>Drug Name </Text>
            <TextInput
                style={styles.input}
                placeholder="medications"
                
            />
        </View>
        
        <View>
            <Text style={styles.text}>Dosage </Text>
            <TextInput
                style={styles.input}
                placeholder="Text"
               
            />
        </View>
        <View>
            <Text style={styles.text}>Date To Start </Text>
            <TextInput
                style={styles.input}
                placeholder="01/10/2023"
               
            />
        </View>
        <View>
            <Text style={styles.text}>Description </Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
             
            />
        </View>

        <View style={styles.last}>
            <View style={{height:60,width:120,backgroundColor:'#7851a9',borderBottomLeftRadius:25,borderTopLeftRadius:25}}>
            </View>
            <Button style={{justifyContent:'center',alignItems:'center'}}>
                <Text> Upload a Photo</Text>
            </Button>
        </View>
      
        </View>
        
        <View style={styles.button}>
            <Button  mode="contained" style={{ height:45}}>
                Confirm Prescription
            </Button>
        </View>
        </ScrollView>
    </View>
    
  )
}

export default Prescription

const styles = StyleSheet.create({
    textinputs:{
        padding:18,
        gap:10,
    },
    text:{
        fontSize:17,
        paddingLeft:20,
        fontWeight:'600'
    },
    input:{
        borderRadius:25,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#7851a9',
    },
    button:{
        gap:10,
        justifyContent:'flex-end',
        padding:20,
        
    },
    last:{
        height:60,
        borderWidth:1,
        borderColor:'#7851a9',
        borderRadius:22,
        display:'flex',
        flexDirection:'row',
        // alignItems:'center',
    }
})