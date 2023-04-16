import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BtnGroup from '../Components/Buttongroup'

const HomeP = ({navigation}) => {

  
  return (
  //content offset in android scrollview?
    <View style={{height:"100%", backgroundColor:'#fff', paddingLeft:10,paddingRight:10,top:10,width:'100%'}}>
       
        <View style={{height:"14%",}}>
            <Appbar.Header style={{padding:20}}>
                <Appbar.Content title="Tele-Epilepsy" titleStyle={{fontSize:25}} />
                <TouchableOpacity
           onPress={()=>navigation.navigate('end')}
           >
           <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.icon1}>
            <FontAwesome name="bell" size={30} color="#088be9" onPress={()=>navigation.navigate('notificationD')} />
            </View>
           </View>
           </TouchableOpacity>
            </Appbar.Header>
        </View>

        <View style={styles.choice}>
        <ScrollView horizontal={true} contentContainerStyle={{gap:10}} style={{width:'100%'}} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('madiation')}
            >
                <Surface style={styles.surface} elevation={2} >
                    <Text style={styles.txt}>Medication</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('mydoctor')}
            >
                <Surface style={styles.surface} elevation={2}>
                    <Text style={styles.txt}>My Doctor</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('booking')}
            >
                <Surface style={styles.surface} elevation={2} flat={false} > 
                    <Text style={styles.txt}>My Appointment</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('booking')}
            >
                <Surface style={styles.surface} elevation={2}>
                    <Text style={styles.txt}>Community Chatroom</Text>
                </Surface>
            </TouchableOpacity>
        </ScrollView>
        </View>
        <Text style={styles.upcoming}>Upcoming</Text>
    </View>
   
  )
}

export default HomeP

const styles = StyleSheet.create({
    icon1:{
        height:45,
        width:45,
        borderRadius:13,
        backgroundColor:'#c9f9ff',
        justifyContent:'center',
        alignItems:'center'
    },
    surface: {
        paddingTop: 35,
        height: 120,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:18,   
        backgroundColor:'#7851a9'     
      },
    choice:{
        paddingTop:20,
        display:'flex',
        flexDirection:'row',
        padding:10,
        width:'100%',
        gap:10,
        justifyContent:'center',
        height:"23%"
    },
    upcoming:{
        fontSize:30,
        fontWeight:'bold',
        left:10,
    },
    txt:{
      color:'#fff',
      fontSize:20,
      fontWeight:'400',
      textAlign:'center'
    }
})
