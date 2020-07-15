import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import Estilo from '../styles/Style'
//import ListNews from '../components/ListNews'
import RequestFeeds from '../components/RequestFeeds'
//import RequestGameDetails from '../components/RequestGameDetails'

export default function App() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      <RequestFeeds/>
    </SafeAreaView>
  );
}
