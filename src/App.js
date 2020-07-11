import React, {Component} from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native' //Componente Text
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Navigator from './Navigator';
import Header from './components/Header';

const AppIndex = createAppContainer(Navigator)

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <StatusBar
                    backgroundColor='dark'
                    barStyle='light-content'
                />
                <SafeAreaView style={styles.header}>  
                    <Header/>
                    <Icon style={{paddingTop: 10, paddingRight: 10}} name='ios-menu' size={28} color='white'/>  
                </SafeAreaView>  
                <AppIndex/>  
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