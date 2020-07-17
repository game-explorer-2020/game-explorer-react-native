import React from 'react';
import { SafeAreaView } from 'react-native';
import Carousel from '../components/Carousel'

export default function App() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      <Carousel name={'Popular games'}/> 
      <Carousel name={'My favorite games'}/> 
      <Carousel name={'My favorite news'}/> 
    </SafeAreaView>
  );
}
