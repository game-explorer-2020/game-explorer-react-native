import React, { Component } from 'react';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewNews extends Component {

  render(){
      const source = this.props.navigation.state.params.url;
      return (
        <SafeAreaView style={styles.container}>
          <WebView 
              originWhitelist={['*']}
              source={{ uri: source }}
              style={styles.video}
          />
          <Button title="Back" onPress={()=>this.props.navigation.navigate('NewsFeed')} style={{ width: "100%" }}/>
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  video: {
    marginTop: 20,
    alignItems: 'center'
  }
});