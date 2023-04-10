import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Appbar} from 'react-native-paper'


const Terms = ({navigation}) => {
  return (
    <View>
      <View style={{backgroundColor:'white'}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Terms And Conditions"  />
                
            </Appbar.Header>
      </View>
            <View style={styles.text}>
              <Text style={{fontStyle:'normal'}}>
              I will write source code of processing image or processing video program or a processing image or processing video project in Python language, exactly using OpenCV library (which is called also CV library ) or similar libraries to Open CV . This python program could be for any subject you like. It could be an application in security, face recognition, shapes recognition, emotion recognition,... For every source code of your project, I will put a comment to make it easy to understand for you.
              I will write source code of processing image or processing video program or a processing image or processing video project in Python language, exactly using OpenCV library (which is called also CV library ) or similar libraries to Open CV . This python program could be for any subject you like. It could be an application in security, face recognition, shapes recognition, emotion recognition,... For every source code of your project, I will put a comment to make it easy to understand for you.
              </Text>
            </View>
    </View>
  )
}

export default Terms

const styles = StyleSheet.create({
  text:{
    padding:20,
  }
})