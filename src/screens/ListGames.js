import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Button, TextInput } from 'react-native';
import Style from '../styles/Style'
import { withNavigation } from 'react-navigation';
import Favorite from '../components/Favorite';
import api from '../services/api'
import Icon from 'react-native-vector-icons/FontAwesome';

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
            loadGames();
            setFilter('');
        }

        function handleNavigate( item ) {
            navigation.navigate('GameDetails', { gameId : item.id });
        }

        return (           
            <SafeAreaView style={[Style.container]}>
                <SafeAreaView style={styles.filterView}>
                    <TextInput style={[styles.textInput]}
                    placeholder='Filter game name'
                    placeholderTextColor = '#7e7e7e'
                    autoCorrect={false}
                    style={[global.fontColor, { height: 35}]}
                    onChangeText={(filter) => setFilter(filter)}
                    keyboard= 'default'
                    multiline
                    onSubmitEditing={handleLoadMore}
                    clearButtonMode="while-editing"
                    />
                    <Icon name={'search'} size={14} color="#7e7e7e" />
                </SafeAreaView>

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
                                <SafeAreaView style={styles.gamesDetails, {width:"50%"}}>
                                    <Text style={[styles.mainText, global.fontColor]}>{item.name}</Text>
                                    <SafeAreaView style={{flexDirection:"row"}}>
                                        <Text style={styles.smallTextGrey}>Genres: </Text>
                                        <Text style={styles.smallTextGreen}>{item.genres.map((o,i) => item.genres.length === i+1 ? o : o +"\n")} </Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={{flexDirection:"row"}}>
                                        <Text style={styles.smallTextGrey}>Platforms: </Text>
                                        <Text style={styles.smallTextGreen}>{item.platforms.map((o,i)=> item.genres.length === i+1 ? o : o +"\n")} </Text>
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
                        <Text style={[Style.fontG, global.fontColor]}>Nenhum item favoritado.</Text>
                        <Button color="#494949" title="Back" onPress={()=>navigation.navigate('ExploreList')}/>
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
        margin: 5,
        height: 175,
        width: 110,
        borderRadius: 10
    },
    gamesDetails: {
        padding: 10,
        alignItems: 'flex-start'
    },
    filterView: {
        borderRadius:10, 
        backgroundColor: '#484848',
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    }
    
});

export default withNavigation(ListGames);