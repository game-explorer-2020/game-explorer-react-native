import React from 'react';
import { SafeAreaView } from 'react-native';
import Navigator from '../routes'

export default function Feed() {
  return (
    <SafeAreaView style={global.backgroundColor}>
      < Navigator />
    </SafeAreaView>
  );
}
