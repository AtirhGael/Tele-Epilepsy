import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Provider } from 'react-native-paper';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import Doctor from './src/Navigation/Doctor';
import Patient from './src/Navigation/Patient';
import Second from './src/Welcome/Second'
import First from './src/Welcome/First';
import Congrats from './src/Welcome/Congrats'
import Portal from './src/Welcome/Portal'
import Choice from './src/Welcome/Choice'
import SignIn from './src/doctorPortal/SignIn';
import SignUp from './src/patientPortal/Signup'
import SignInP from './src/patientPortal/SignIn'

SignInP
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      {/* <Congrats/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Second/> */}
      {/* <First/> */}
      {/* <Portal/> */}
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
      
      {/* <Patient/> */}
      {/* <Doctor/> */}
      <Stack.Screen name='first' component={First} />
      <Stack.Screen name='second' component={Second} />
      <Stack.Screen name='Portal' component={Portal} />
      <Stack.Screen name='Congrats' component={Congrats} />
      <Stack.Screen name='SigninD' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='SignInP' component={SignInP} />
      <Stack.Screen name='Choice' component={Choice} />
      <Stack.Screen name='patient' component={Patient} />
      <Stack.Screen name='Doctor' component={Doctor} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
