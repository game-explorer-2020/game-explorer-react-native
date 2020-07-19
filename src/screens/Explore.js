import React from 'react';
import { SafeAreaView } from 'react-native';
import Carousel from '../components/Carousel'

export default function Explore() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      <Carousel name={'Popular Games'}/> 
      <Carousel name={'My favorite Games'}/> 
      <Carousel name={'My favorite news'}/> 
    </SafeAreaView>
  );
}
