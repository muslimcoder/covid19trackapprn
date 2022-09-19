import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CovidTracker, Splash} from 'react-native';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={CovidTracker}
        options={{headerShown: false}}
      />
       
    </Stack.Navigator>
  );
};

export default Router;
