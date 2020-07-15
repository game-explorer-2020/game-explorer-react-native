import React, {Component} from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native' //Componente Text
import { createAppContainer } from 'react-navigation';
import Navigator from './Navigator';
import Header from './components/Header';
import * as Font from "expo-font";
import { AppLoading } from "expo";

const AppIndex = createAppContainer(Navigator)


export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
          fontLoaded: false
        }
    }

    async componentDidMount() {
        try {
          await Font.loadAsync({
            NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
            NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf')
          })
          this.setState({ fontLoaded: true })
        } catch (error) {
          console.log(error)
          return
        }
    }

    render(){
        const { fontLoaded } = this.state

        if (fontLoaded) {
            return(
                <SafeAreaView style={{flex:1}}>
                    <StatusBar style="auto" />
                    <SafeAreaView style={styles.header}>  
                        <Header/>
                    </SafeAreaView>  
                    <AppIndex/>  
                </SafeAreaView>
            )
        }
        return(
            <SafeAreaView>
                <AppLoading/>
            </SafeAreaView>
        )
    }
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