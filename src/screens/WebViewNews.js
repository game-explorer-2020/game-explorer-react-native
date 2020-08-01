import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewNews extends Component {

  render(){
      const source = this.props.navigation.state.params.url;
      return (
        <View style={styles.container}>
          <WebView 
              originWhitelist={['*']}
              source={{ uri: source }}
              style={styles.video}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:0,
    width:'100%',
    height:'100%'
  },
  video: {
    alignItems: 'center'
  }
});