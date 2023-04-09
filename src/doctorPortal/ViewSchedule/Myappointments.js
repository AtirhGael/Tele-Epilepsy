import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import data from '../Data'
import {Appbar, Button} from 'react-native-paper'
import Upcoming from './Upcoming'
import Past from './Past'


const Myappointments = ({navigation}) => {
    const [active, setActive] = useState('active')
  return (
    <View>
      <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="All Patients"  />
                <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
            <View style={styles.button}>
            <Button icon="av-timer" mode="contained" style={{ height:45}}
            onPress={()=>setActive('active')}
            >
                upcoming
            </Button>
            <Button icon="av-timer" mode="contained" style={{ height:45}}
            onPress={()=>setActive('inactive')}
            >
               Past
            </Button>
        </View>
        {active === 'active' && <Upcoming/> }
        {active === 'inactive' && <Past/>}
           
    </View>
  )
}

export default Myappointments

const styles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:60,
        paddingTop:15,
    }
})