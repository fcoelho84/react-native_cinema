import React from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

import Spotlight from './components/spotlight';


export default () => {
    return (
        <View style={ styles.container } >
            <Spotlight></Spotlight>

            <TouchableOpacity style={ styles.button } >
                <Text style={ styles.buttonText } >Teste</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34343b',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    buttonText: {
        fontSize: 16,
    },

    button: {
        backgroundColor: '#fe5492',
        height: 40,
        width: 150,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
