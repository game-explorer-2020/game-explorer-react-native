import React from 'react';
import { SafeAreaView } from 'react-native';
import NewsFeed from '../components/NewsFeed'
import Navigator from '../routes'


export default function App() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      < Navigator />
    </SafeAreaView>
  );
}
