import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '../doctorPortal/Routes';
import AllPatients from '../doctorPortal/Patients/AllPatients';
import PatientDetails from '../doctorPortal/Patients/PatientDetails';
import Prescription from '../doctorPortal/Patients/Prescription';
import PatientRegistration from '../doctorPortal/Patients/PatientRegistration';
import Myappointments from '../doctorPortal/ViewSchedule/Myappointments';
// import MyAppoinments from '../doctorPortal/ViewSchedule/MyAppoinments';
import Contact from '../doctorPortal/Components/Contact';
import Terms from '../doctorPortal/Components/Terms';
import Policy from '../doctorPortal/Components/Policy';
import BookingType from '../doctorPortal/Patients/BookingType';
import Notification from '../doctorPortal/Notifications'
import Massaging from '../doctorPortal/Components/Massaging';
import Onsite from '../doctorPortal/ViewSchedule/Onsite';
import Offline from '../doctorPortal/ViewSchedule/Offline';
import Online from '../doctorPortal/Components/Online';
import Ending from '../doctorPortal/Components/Ending'
import Session from '../doctorPortal/Components/Session';
import Logout from '../doctorPortal/Components/Logout';


const Doctor = () => {
  const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      >
      <Stack.Screen name="Route" component={Routes} />
        <Stack.Screen name="allpatients" component={AllPatients} />
        <Stack.Screen name="patientdetail" component={PatientDetails} />
        <Stack.Screen name="prescriptions" component={Prescription} />
        <Stack.Screen name="patientInfo" component={PatientRegistration} />
        <Stack.Screen name="myappointment" component={Myappointments} />
        {/* <Stack.Screen name="appointment" component={MyAppoinments} /> */}
        <Stack.Screen name="contact" component={Contact} />
        <Stack.Screen name="terms" component={Terms} />
        <Stack.Screen name="policy" component={Policy} />
        <Stack.Screen name="type" component={BookingType} />
        <Stack.Screen name="onsite" component={Onsite} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="massages" component={Massaging} />
        <Stack.Screen name="ofline" component={Offline} />
        <Stack.Screen name="online" component={Online} />
        <Stack.Screen name="end" component={Ending} />
        <Stack.Screen name="session" component={Session} />
        <Stack.Screen name="logout" component={Logout} />
        
      </Stack.Navigator>
    
  )
}

export default Doctor

const styles = StyleSheet.create({})