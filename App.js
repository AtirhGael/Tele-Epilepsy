import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Provider } from 'react-native-paper';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import AllPatients from './src/doctorPortal/Patients/AllPatients';
import PatientDetails from './src/doctorPortal/Patients/PatientDetails';
import Prescription from './src/doctorPortal/Patients/Prescription';
import BookAppointment from './src/doctorPortal/Patients/BookAppointment';
import PatientRegistration from './src/doctorPortal/Patients/PatientRegistration';
import Myappointments from './src/doctorPortal/ViewSchedule/Myappointments';
import MyAppoinments from './src/doctorPortal/ViewSchedule/MyAppoinments';
import Contact from './src/doctorPortal/Components/Contact';
import Terms from './src/doctorPortal/Components/Terms';
import Policy from './src/doctorPortal/Components/Policy';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
        <Stack.Screen name="Route" component={Routes} />
        <Stack.Screen name="allpatients" component={AllPatients} />
        <Stack.Screen name="patientdetail" component={PatientDetails} />
        <Stack.Screen name="prescriptions" component={Prescription} />
        <Stack.Screen name="booking" component={BookAppointment} />
        <Stack.Screen name="patientInfo" component={PatientRegistration} />
        <Stack.Screen name="myappointment" component={Myappointments} />
        <Stack.Screen name="appointment" component={MyAppoinments} />
        <Stack.Screen name="contact" component={Contact} />
        <Stack.Screen name="terms" component={Terms} />
        <Stack.Screen name="policy" component={Policy} />

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
