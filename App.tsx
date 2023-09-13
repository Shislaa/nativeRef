import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  text: {
    color: 'black',
    fontSize: 30,
    fontStyle: 'italic',
    textTransform: 'uppercase'
  },
  safeAreaStyle: {
    backgroundColor: '#ffffff'
  },
  button: {
    width: 400,
    heigth: 60
  }
});

export default App;
