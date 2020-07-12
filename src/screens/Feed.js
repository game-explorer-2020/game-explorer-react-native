import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Estilo from '../styles/Style'

export default function App() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      <Text style={[Estilo.fontG, global.fontColor]}>Feed!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
