import React from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native' //Componente Text
import { createAppContainer } from 'react-navigation';
import Routes from './routes';

const AppIndex = createAppContainer(Routes)

export default function App() {
    return  (
        <>
            <AppIndex/>
        </>
    );
}
