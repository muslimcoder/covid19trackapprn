/** 
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
*/
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CovidTracker from './Dashboard';

export default function App() {
  return <CovidTracker />
  
}