import React, { useState } from 'react'; 
import Routes from './src/Route/Routes'; 
import {AppProvider} from './src/Provider/app.provider';

import { SafeAreaView, View, StyleSheet, Text, StatusBar, } from 'react-native';

export default function App() {

  return ( 
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }, 
}
); 