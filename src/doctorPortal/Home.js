import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', paddingLeft:10,paddingRight:10}}>
        <View>
            <Appbar.Header style={{ backgroundColor:"#fff",padding:20}}>
                <Appbar.Content title="Tele-Epilepsy" ty />
                <View style={{ height:50, width:50,borderRadius:10,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <FontAwesome name="bell-o" size={35} color="#088be9"  />
                </View>
            
            </Appbar.Header>
        </View>
        <View style={styles.choice}>
            <TouchableOpacity
            onPress={() => navigation.navigate('allpatients')}
            >
                <Surface style={styles.surface} elevation={2} >
                    <Text>Patients</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('myappointment')}
            >
                <Surface style={styles.surface} elevation={2}>
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
        backgroundColor:'#7851a9'     
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
