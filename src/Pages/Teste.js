import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Jogo from '../funcao/Jogo';

export default function Teste() {
    return (
        <View style={styles.container}>
            
            <Jogo/>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#6A5ACD'
}
});
