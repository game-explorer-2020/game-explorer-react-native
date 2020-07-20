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
          <Button color="#494949" title="Back" onPress={()=>this.props.navigation.navigate('NewsFeed')}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    width: 365,
    height: 475
  },
  video: {
    alignItems: 'center'
  }
});