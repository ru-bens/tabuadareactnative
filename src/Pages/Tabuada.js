import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';


export default function Tabuada({navigation}) {
   
    return (
        <SafeAreaView style={styles.container}>
        
 <View style={styles.list}>
         <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta1')}>
        
         <Text style={styles.texx}>1 X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta2')}>
        
           <Text style={styles.texx}>2 X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta3')}>
       
           <Text style={styles.texx}>3 X</Text>
        </TouchableOpacity>
</View>
<View style={styles.list}>
        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta4')}>
        
           <Text style={styles.texx}>4 X</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta5')}>
        
           <Text style={styles.texx}>5 X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta6')}>
        
           <Text style={styles.texx}>6 X</Text>
        </TouchableOpacity>
</View>
<View style={styles.list}>
        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta7')}>
        
           <Text style={styles.texx}>7 X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta8')}>
        
           <Text style={styles.texx}>8 X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta9')}>
      
           <Text style={styles.texx}>9 X</Text>
        </TouchableOpacity>
</View>
        <TouchableOpacity style={styles.tabuada} onPress={() =>navigation.navigate('Ta10')}>
        
           <Text style={styles.texx}> 10 X</Text>
        </TouchableOpacity>

        
         </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#6A5ACD',
    
},
tabuada:{
    alignItems:'center',
    backgroundColor:'#fff',
    padding:25,
    flexDirection:'row',
    margin:8,
    marginTop:10,
    borderRadius: 10, 
    width:90,
    left:20,
},
list:{
    flexDirection:'row',   
},
texx:{
   fontSize:20,
   color:'#121212'
}

});
