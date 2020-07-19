import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import Style from '../styles/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class ListGames extends Component {

    
    render(){
        const games = this.props.navigation.state.params.list || [];

        return (           
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={games}
                    keyExtractor={(item,index) => index.toString()}
                    vertical
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleNavigate(item)}>
                            <SafeAreaView style={{flex:1},{flexDirection:"row"}}>
                                <Image source={{uri: item.coverUrl}} style={styles.frame}/>
                                <SafeAreaView style={styles.gamesDetails}>
                                    <Text style={[styles.mainText, global.fontColor]}>{item.name}</Text>
                                    <SafeAreaView style={{flexDirection:"row"}}>
                                        <Text style={styles.smallTextGrey}>Genres: </Text>
                                        <Text style={styles.smallTextGreen}> {item.genres} </Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={{flexDirection:"row"}}>
                                        <Text style={styles.smallTextGrey}>Platforms: </Text>
                                        <Text style={styles.smallTextGreen}> {item.platforms} </Text>
                                    </SafeAreaView>
                                    <Icon name="heart-o" size={14} color="#17B978" />  
                                </SafeAreaView>
                            </SafeAreaView>
                        </TouchableOpacity>
                )}/>
                <Button title="Back" onPress={()=>console.log(games)} style={{ width: "100%" }}/>
            </SafeAreaView>
        );
    }
}
  
const styles = StyleSheet.create({
    mainText: {
        fontSize: 14,
        flexWrap: 'wrap',
        width:210
    },
    smallTextGrey: {
        fontSize: 13,
        color:"#494949",
        alignItems: 'flex-start',
    },
    smallTextGreen: {
        fontSize: 13,
        color:"#17B978",
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex:1
    },   
    frame: {
        marginTop: 10,
        height: 175,
        width: 110,
        borderRadius: 10
    },
    gamesDetails: {
        padding: 10,
        alignItems: 'flex-start'
    },
    container: {
        width: '100%',
        height: '100%'
    }
    
});

export default withNavigation(ListGames);