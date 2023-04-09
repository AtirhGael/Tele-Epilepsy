import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper';
import data from '../Data';

const Past = () => {
  return (
    <View>
      <Text>yesteday </Text>
      <View>
        <FlatList
        data={data}
        renderItem={({item})=>(
            <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.image}/>
                    <View>
                        <Text style={styles.name}> {item.name} </Text>
                        <Text style={styles.call}> Voice call</Text>
                        <Text style={styles.time}> 13:00 - 15:00 AM </Text>
                    </View>
                </View>
                <View>
                    <Text> Cancelled </Text>
                </View>
            </View>
        )}
        />
      </View>
    </View>
  )
}

export default Past

const styles = StyleSheet.create({
    main:{

    },
    image:{
        height:80,
        width:70,
        resizeMode:'stretch',
    }
})