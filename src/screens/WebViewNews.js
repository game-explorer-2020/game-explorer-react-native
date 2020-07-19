import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewNews extends Component {

  render(){
    
      const source = this.props.navigation.state.params.url;

      return (
          <WebView
            source={{ uri: 'https://www.arcadelunia.com/' }}
            style={styles.videos}
          />
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
  }
});