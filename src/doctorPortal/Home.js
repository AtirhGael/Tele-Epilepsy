import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  return (
    <View>
        <View>
            <Appbar.Header>
                <Appbar.Content title="Tele-Epilepsy" ty />
                <Appbar.Action icon="calendar" onPress={() => {}} />
            
            </Appbar.Header>
        </View>
        <View style={styles.choice}>
            <TouchableOpacity
            onPress={() => navigation.navigate('allpatients')}
            >
                <Surface style={styles.surface} elevation={4}>
                    <Text>Patients</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('myappointment')}
            >
                <Surface style={styles.surface} elevation={4}>
                    <Text>View Schedule</Text>
                </Surface>
            </TouchableOpacity>
        </View>
        <View style={{
            paddingTop:25,

        }}>
            <Text style={styles.upcoming}> Upcoming </Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    surface: {
        paddingTop: 25,
        height: 150,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:35,
      },
    choice:{
        paddingTop:20,
        display:'flex',
        flexDirection:'row',
        padding:10,
        width:'100%',
        gap:30,
        justifyContent:'center'

    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold'
    }
})