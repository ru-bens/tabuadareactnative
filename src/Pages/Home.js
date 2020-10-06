import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texe}> UMA MANEIRA FACIL DE ESTUDAR AS TABUADAS </Text>
            <View style={styles.conbutton}>
        <TouchableOpacity style={styles.tabuada} onPress={() => navigation.navigate('Tabuada')}>
           <Text style={styles.tex}> Estudar Tabuada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabuada} onPress={() => navigation.navigate('Teste')}>
           <Text style={styles.tex}>Teste Abilidade</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#6A5ACD',

},
conbutton:{
    
    paddingTop:200

},

tabuada:{
    
    backgroundColor:'#fff',
    padding:30,
   // flexDirection:'column',
    margin:8,
    borderRadius:10,
    elevation:15,
},
tex:{
   textAlign:'center',
   fontSize:30
},
texe:{
    color:'#fff',
    fontSize:20,
}
});

