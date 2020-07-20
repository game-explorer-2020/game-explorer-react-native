import React, { useState } from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native' //Componente Text
import { createAppContainer } from 'react-navigation';
import Navigator from './src/Navigator';
import Header from './src/components/Header';
import BackTitle from './src/components/BackTitle';

const AppIndex = createAppContainer(Navigator)

export default function App({ route }) {
    const [isMainScreen, setIsMainScreen] = useState(true);
    const [currentScene, setCurrenteScene] = useState();

    return  (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar style="auto" />
                { isMainScreen  ? 
                    <>
                        <Header/>      
                        <AppIndex/> 
                    </> :  
                        <BackTitle name="News"/>
                }
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({  
    wrapper: {  
        flex:1,
        maxHeight: "100%",
        maxWidth: "100%"
    }
});  

