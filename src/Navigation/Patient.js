import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from '../patientPortal/Pages/Notifications';
import HomeP from '../patientPortal/Pages/Home';
import Medication from '../patientPortal/Pages/Madication'
import Payment from '../patientPortal/Components/Payment';
import MyDoctor from '../patientPortal/Pages/MyDoctor';
import Massaging from '../patientPortal/Components/Massaging';
import Ending from '../patientPortal/Pages/Ending';
import Appointment from '../patientPortal/Pages/Appointment';
import Booking from '../patientPortal/Pages/Booking';
import ButtomTab from '../patientPortal/Tab';
import History from '../patientPortal/Pages/History';
import Menu from '../patientPortal/Pages/Menu';
import BookingType from '../patientPortal/Components/BookingType';
import BookAppointment from '../patientPortal/Components/BookAppointment';
import Offline from '../patientPortal/Components/Offline';
import Onsite from '../patientPortal/Components/Onsite'
import Prescription from '../patientPortal/Components/Prescription';
import Prescribe from '../patientPortal/Components/Prescribe';

const Patient = () => {
    const Stack = createNativeStackNavigator();
  return (
    <>
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
    }}
    >
        <Stack.Screen name="tabbs" component={ButtomTab} />
        <Stack.Screen name="homeP" component={HomeP} />
        <Stack.Screen name="notificationD" component={Notifications} />
        <Stack.Screen name="madiation" component={Medication} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="mydoctor" component={MyDoctor} />
        <Stack.Screen name="massaging" component={Massaging} />
        <Stack.Screen name="end" component={Ending} />
        <Stack.Screen name="apoint" component={Appointment} />
        <Stack.Screen name="booking" component={Booking} />
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="types" component={BookingType} />
        <Stack.Screen name="apointment" component={BookAppointment} />
        <Stack.Screen name="ofline" component={Offline} />
        <Stack.Screen name="onsite" component={Onsite} />
        <Stack.Screen name="Prescription" component={Prescribe} />
        
    </Stack.Navigator>
    </>
  )
}

export default Patient

const styles = StyleSheet.create({})