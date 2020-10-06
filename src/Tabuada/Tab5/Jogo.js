
import React from 'react';
import {  StyleSheet,TouchableOpacity, Text, View ,Modal} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState ,useEffect} from 'react';






       let nun1 = 5;
       let nun2 = Math.floor(Math.random() * 10 + 1);
       let ab = nun1 * nun2 ;

export default function jogo() {

//---------------------------------
  //função do botão que caucula e manda aleta da resposta
  
   function calc(){
       const a = ab;
       if(a == nunresult){
      
            setModa(true)
           
       }
       else(setModalVisible(true)) ;

      setNunresult('')
       nun1 = 5;
       nun2 = Math.floor(Math.random() * 10 + 1);
       ab = nun1 * nun2 ;
       modalVisible;
   }
  
 //-------------------------------   
 //gardando o estado do textInput
 const [modalVisible, setModalVisible] = useState(false);

    const [nunresult, setNunresult]= useState('');
   const [moda, setModa]= useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.textjogo}>{ nun1} X { nun2} = </Text>

      <Modal animationType="slide " transparent={false} visible={moda} onRequestClose={() => { setModa(!moda); }}>
      <View style={{backgroundColor:'#008000', flex:1}}>
                <TouchableOpacity style={styles.botta} onPress={() => setModa(false)} >
                   <Text style={styles.textbotta}>ACERTOU</Text>
                </TouchableOpacity>
              </View>
      </Modal> 

            <Modal animationType="slide " transparent={false} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
              <View style={styles.modal}>
                <TouchableOpacity style={styles.botta} onPress={() => setModalVisible(false)} >
                   <Text style={styles.textbotta}>ERROU</Text>
                </TouchableOpacity>
              </View>
            </Modal> 

       <TextInput
              style={styles.input}
              value={nunresult}
              onChangeText={(texto)=>setNunresult(texto)}
              textAlign={'center'}
              keyboardType={'numeric'}
              placeholder={'RESPOSTA'}
       />

        <TouchableOpacity style={styles.botta} onPress={calc} >
           <Text style={styles.textbotta}>Confirmar</Text>
        </TouchableOpacity>

        <Text  style={{fontSize:40}}
             onPress={() =>console.log(ab)}> </Text>
      </View>
            
          
    );
}

const styles = StyleSheet.create({

container:{
    flex:1,  
},
input:{
    fontSize:40,
    borderWidth:2,
    borderColor:'#fff',
    marginLeft:80,
    marginRight:80,
    color:'#fff',
    marginTop:30,
},
textjogo:{
    fontSize:40,
    textAlign:'center',
    backgroundColor:'#fff',
    marginLeft:100,
    marginRight:100,
    marginTop:15,
    elevation:8,
    borderRadius:8,
},
botta:{ 
    fontSize:40,
    textAlign:'center',
    backgroundColor:'#fff',
    marginLeft:80,
    marginRight:80,
    marginTop:30,
    padding:20,
    borderRadius:8,
    elevation:10,
},
textbotta:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
},
modal:{
    backgroundColor:'#ff1212',
    flex:1
},
modalView: {
    margin: 20,
    backgroundColor: "#008000",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    

}
})
