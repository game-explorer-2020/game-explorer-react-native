import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Estilo from '../estilos/Estilo'

export default function App() {
  return (
    <SafeAreaView style={style.AppBlack}>
      <Text style={[Estilo.fontP, global.colorMode]}>Explore!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    AppBlack: {
        backgroundColor: 'black',
        flexGrow: 1,
        justifyContent: "center", //Centraliza na vertical da tela
        alignItems: "center",      //Centraliza na horizontal da tela
        padding: 20
    },
    AppWhite: {
        backgroundColor: 'white',
        flexGrow: 1,
        justifyContent: "center", //Centraliza na vertical da tela
        alignItems: "center",      //Centraliza na horizontal da tela
        padding: 20
    }
})