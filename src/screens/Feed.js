import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import Estilo from '../styles/Style'
import RequestFeeds from '../components/RequestFeeds'
import RequestGameDetails from '../components/RequestGameDetails'

export default function App() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      <Text style={[Estilo.fontG, global.fontColor]}>Feed!</Text>
      <RequestGameDetails gameId={5}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
