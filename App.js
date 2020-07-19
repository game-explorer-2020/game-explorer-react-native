import React, { useState, useEffect } from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native' //Componente Text
import { createAppContainer } from 'react-navigation';
import Navigator from './src/Navigator';
import Header from './src/components/Header';
import * as Font from "expo-font";
import { AppLoading } from "expo";

const AppIndex = createAppContainer(Navigator)

export default function App() {
    /*const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        try {
            Font.loadAsync({ 
              NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
              NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf')
            })
            setFontLoaded(true);
          } catch (error) {
            console.log(error)
            return
          }
    }, []);*/

   // return !fontLoaded ? 
  return  (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar style="auto" />
            <SafeAreaView style={{flex:1}, styles.header}>  
            {/*
                this.props.navigation.state.screens == 'NewsFeed'?
                <Header/>:
                <Header/>
            */}
                <Header/>
            </SafeAreaView>  
            <AppIndex/>  
        </SafeAreaView>
    );// : (
        <SafeAreaView>
            <AppLoading/>
        </SafeAreaView>
   // );
}

const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: 'black',  
        paddingHorizontal: 18,  
        paddingTop: 5,  
    }  
});  

