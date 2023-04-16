import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar,Button } from 'react-native-paper';

const BookingType = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      <View >
        <Appbar.Header style={{ backgroundColor:"#fff"}}>
                <Appbar.BackAction onPress={() => navigation.goBack()} size={30} />
                <Appbar.Content title="Book Appointment"  />
            </Appbar.Header>
      </View>
      <View style={styles.button1}>
            <Button  mode="contained" onPress={() => navigation.navigate('online')} style={{ height:50,width:'90%',borderRadius:25}}>
                <Text style={styles.text}>online consultation</Text>
            </Button>
            <Button  mode="contained" onPress={() => navigation.navigate('ofline')} style={{ height:50,width:'90%',borderRadius:25}}>
            <Text style={styles.text}>offline consultation</Text>
            </Button>
            <Button  mode="contained" onPress={() => navigation.navigate('onsite')}  style={{ height:50,width:'90%',borderRadius:25}}>
            <Text style={styles.text}>onsite consultation</Text>
            </Button>
        </View>
    </View>
  )
}

export default BookingType

const styles = StyleSheet.create({
    button1:{
        gap:30,
        justifyContent:'flex-end',
        padding:20,
        elevation: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:150,
    },
    text:{
        fontSize:17,
        fontWeight:'500'
    }
})