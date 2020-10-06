import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Modal} from 'react-native';
import Jogo from './Jogo';
import  { useState } from "react";



export default function Ta1() {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        
       
        <View style={styles.container}>


      
            <Text style={styles.tex}>1 X 1 = 1</Text>
            <Text style={styles.tex}>1 X 2 = 2</Text>
            <Text style={styles.tex}>1 X 3 = 3</Text>
            <Text style={styles.tex}>1 X 4 = 4</Text>
            <Text style={styles.tex}>1 X 5 = 5</Text>
            <Text style={styles.tex}>1 X 6 = 6</Text>
            <Text style={styles.tex}>1 X 7 = 7</Text>
            <Text style={styles.tex}>1 X 8 = 8</Text>
            <Text style={styles.tex}>1 X 9 = 9</Text>
            <Text style={styles.tex}>1 X 10 = 10</Text>
          

      
            <Modal
            animationType="slide "
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
                 }}
              > 
         <View style={{  flex:1, backgroundColor:'#6A5ACD', alignItems:'center'}}>
    
                  <TouchableOpacity style={styles.tabuada1} onPress={() => setModalVisible(false)}>
                     <Text style={styles.texx}>voltar</Text>
                 </TouchableOpacity>
               <Jogo/>  
         </View>
                </Modal>

       
      
            <TouchableOpacity style={styles.tabuada} onPress={() => setModalVisible(true)}>
                <Text style={styles.texx}>Teste Abilidade</Text>
            </TouchableOpacity>
        
        
        </View>
       
      
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6A5ACD',
        alignItems:'center',
    },
    tex:{
        color:'#fff',
        fontSize:30,
    },
    texx:{
      
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
  
    },
    tabuada:{
    
        backgroundColor:'#fff',
        padding:10,
       
        margin:8,
        borderRadius:10,
    
    },
    centeredView: {
       // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      tabuada1:{
        fontSize:40,
    textAlign:'center',
    backgroundColor:'#fff',
   // marginLeft:20,
     //marginRight:20,
    marginVertical:20,
    padding:10,
    paddingLeft:100,
    paddingRight:100,
    borderRadius:8,
    elevation:15,
      }
});
