import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './doctorPortal/Home';
import History from './doctorPortal/History';
import Menu from './doctorPortal/Menu';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#088be9'
      }}
    >
     
     <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={size} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="grip-lines" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Routes

