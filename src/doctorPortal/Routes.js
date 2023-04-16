import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Menu from './Menu';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5,Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import Booking from '../doctorPortal/ViewSchedule/Myappointments'
import { StyleSheet,Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor='#7851a9'
      shifting={true}
      barStyle={{ backgroundColor: '#fff',height:80, }}
      screenOptions={{
        headerShown:false,  
        tabBarStyle:{
          shadowColor:'#fff'
        }
      }}
    >
     
     <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarColor:'#7851a9',
          tabBarLabel: 'Home' ,
        
          tabBarIcon: ({ focused, color, size }) => (
            
            <View style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}>

            <MaterialCommunityIcons name="home" color='#7851a9' size={35} />
           
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Booking}
        options={{
          tabBarLabel: 'Booking',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={35} color='#7851a9' />
          ),
          
        }}
      />
      <Tab.Screen
        name="main"
        component={Menu}
        
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={35} color='#7851a9' />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Routes
// Purple: #7851a9
// Light blue: #088be9
// Black: #2e2c2c
const styles = StyleSheet.create({
  tabBarIcon:{
    display:'flex',
    flexDirection:'row',
    
  }

})