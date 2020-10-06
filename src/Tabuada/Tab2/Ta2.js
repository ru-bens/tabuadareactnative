import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Modal} from 'react-native';
import Jogo from './Jogo';
import  { useState } from "react";



export default function Ta2() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    
        <View style={styles.container}>
            <Text style={styles.tex}>2 X 1 = 1</Text>
            <Text style={styles.tex}>2 X 2 = 4</Text>
            <Text style={styles.tex}>2 X 3 = 6</Text>
            <Text style={styles.tex}>2 X 4 = 8</Text>
            <Text style={styles.tex}>2 X 5 = 10</Text>
            <Text style={styles.tex}>2 X 6 = 12</Text>
            <Text style={styles.tex}>2 X 7 = 14</Text>
            <Text style={styles.tex}>2 X 8 = 16</Text>
            <Text style={styles.tex}>2 X 9 = 18</Text>
            <Text style={styles.tex}>2 X 10 = 20</Text>

            <TouchableOpacity style={styles.tabuada} onPress={() => setModalVisible(true)}>
              <Text style={styles.texx}>Teste Abilidade</Text>
            </TouchableOpacity>
            

             <Modal
                     animationType="slide "
                     transparent={false}
                     visible={modalVisible}
                     onRequestClose={() => {
                     setModalVisible(!modalVisible);
                    }}
             > 
        <View style={styles.container}>
      
       

        <TouchableOpacity style={styles.tabuada1} onPress={() => setModalVisible(false)}>
           <Text style={styles.texx}>voltar</Text>
        </TouchableOpacity>
         <Jogo/>
        </View>
      </Modal>
   
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
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        },
        tabuada1:{
          fontSize:40,
        textAlign:'center',
        backgroundColor:'#fff',
        marginVertical:20,
        padding:10,
        paddingLeft:100,
        paddingRight:100,
        borderRadius:8,
        elevation:15,
        }
    
    
});