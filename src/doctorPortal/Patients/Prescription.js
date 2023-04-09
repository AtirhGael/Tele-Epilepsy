import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import {Appbar, Button} from 'react-native-paper'
import { ScrollView } from 'react-native'

const Prescription = ({navigation}) => {
    const [text,setText] = useState('')
  return (
    
    <View>
        <ScrollView>
      <View >
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Presccriptions"  />
                <Appbar.Action icon="calendar" onPress={() => {}} />
                 <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
      </View>
      <View style={styles.textinputs}>
        <View>
            <Text style={styles.text}>Drug Name </Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
                
            />
        </View>
        
        <View>
            <Text style={styles.text}>Usage </Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
               
            />
        </View>
        <View>
            <Text style={styles.text}>Date To Start </Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
               
            />
        </View>
        <View>
            <Text style={styles.text}>Description </Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
             
            />
        </View>
      
        </View>
        <View style={styles.button}>
            <Button icon="av-timer" mode="contained" style={{ height:45}}>
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

    },
    input:{
        borderRadius:10,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        gap:10,
        justifyContent:'flex-end',
        padding:20,
        marginTop:100,
    }
})