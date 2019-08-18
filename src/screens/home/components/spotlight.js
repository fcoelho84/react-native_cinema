import React from 'react';


import {
    View,
    Image,
    Dimensions,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import Movies from '../../../services/api';



export default () => {
    return (

        <View>
            <ScrollView 
                style={ styles.scroll } 
                scrollEventThrottle={ 10 }
                pagingEnabled
                horizontal={ true }>
                {
                    Movies.map ( (movie, pos) => 
                        (
                            <View style={ styles.container} key={pos}>
                                <Image 
                                    style= { styles.image } 
                                    source={ {uri: movie.photo} }
                                />
                                <Text style={ styles.title } > { movie.name } </Text>
                            </View>
                        )
                    )
                }
            </ScrollView>
            
            
   
              

        </View>
    );
};

const styles = StyleSheet.create({


    container: {
        position: 'relative',
        height: 300,
    },

    title: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        fontSize: 24,
        padding: 15,
        backgroundColor: 'rgba(52, 52, 59, .5)',
        color: '#fff',
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,


    },
    
    image: {
        height: 300,
        flex: 1,
        width: Math.round(Dimensions.get('window').width),
    }
  });