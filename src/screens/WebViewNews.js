import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function WebViewNews({ navigation })  {

    //const { props } = navigation.getParam('url');

    return (
        <View style={{ flex:1, alignItems: 'flex-end' }}>
            <Icon name="arrow-left" size={20} color="#17B978" />  
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={true}
                startInLoadingState={true}
                source={{ uri: 'https://github.com/react-native-community/react-native-webview/issues/444' }}
                style={{width:200,height:200, marginTop:20}} 
            />
        </View>
    );
    
}
