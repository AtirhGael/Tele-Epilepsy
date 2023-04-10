import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import React from 'react'
import {Appbar, Button} from 'react-native-paper'


const Contact = ({navigation}) => {
  return (
    
    <View>
      <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Contact Us"  />   
      </Appbar.Header>
      <ScrollView>
      <View>
        <View style={styles.fields}>
          <Text style={styles.text}> Full Name </Text>
          <TextInput
          style={styles.input}
          placeholder='Adam JohnSon'
          />
        </View>
        <View style={styles.fields}>
          <Text style={styles.text}> Email</Text>
          <TextInput
          style={styles.input}
          placeholder='AdamJohnSon@gmail.com'
          />
        </View>
        <View style={styles.fields} >
        <Text style={styles.text}> Write Your Massage</Text>
          <TextInput
            style={styles.textAreaContainer}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={8}
            multiline={true}
          />
        </View>
        <View style={{padding:10}}>
        <Button icon="medical-bag"  mode="contained" style={{ height:50,borderRadius:25}}>
           send Massage
        </Button>
        </View>
      </View>
      </ScrollView>
    </View>
    
  )
}

export default Contact

const styles = StyleSheet.create({
  fields:{
      padding:15,
  },
  input:{
    borderColor:'gray',
    borderWidth:1,
    height:55,
    borderRadius:25
  },
  text:{
    padding:8,
    left:7,
    fontSize:20,
    fontWeight:'900'
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    
    borderRadius:25,
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start"
  }
})