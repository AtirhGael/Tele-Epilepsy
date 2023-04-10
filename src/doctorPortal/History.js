import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import Myappointments from './ViewSchedule/Myappointments'

const History = ({navigation} ) => {
  return (
    <View>
      <Myappointments/>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})