import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Button, TextInput } from 'react-native';
import Style from '../styles/Style'
import { withNavigation } from 'react-navigation';
import Favorite from '../components/Favorite';
import api from '../services/api'

function ListGames({ navigation }) {
   
        const [games, setGames] = useState(navigation.state.params.list);
        const [filter, setFilter] = useState('');
           
        useEffect(() => {
            loadGames();
        }, []);

        loadGames = async () => {
            if(filter =='') return null
            const response = await api.get('games?term='+ filter);
            setTimeout(() => {
                setGames([...response.data]);
            }, 100)
        } 

        function handleLoadMore () {
            console.log(filter)
            loadGames();
            setFilter('');
        }

        return (           
            <SafeAreaView style={styles.container}>
                <TextInput style={[styles.textInput]}
                placeholder='🔎 Filter game name...'
                placeholderTextColor = '#494949'
                autoCorrect={false}
                style={[global.fontColor, { borderBottomColor: "#494949", borderBottomWidth: 1, height: 40}]}
                onChangeText={(filter) => setFilter(filter)}
                keyboard= 'default'
                multiline
                onSubmitEditing={handleLoadMore}
                clearButtonMode="while-editing"
                />
                { games.length > 0 ? (
                <>
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
                                    <Favorite content={item}/>
                                </SafeAreaView>
                            </SafeAreaView>
                        </TouchableOpacity>
                )}/>
                <Button color="#494949" title="Back" onPress={()=>navigation.navigate('ExploreList')}/>
                </>
                ): 
                (
                    <>
                    </>
                )}
            </SafeAreaView>
        );
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
        flex: 1,
        margin: 0,
        width: '100%',
        height: '100%'
    }
    
});

export default withNavigation(ListGames);