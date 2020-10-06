import React, { useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, Modal} from 'react-native';
import Jogo from './Jogo';


export default function Ta3() {

    const [modalVisible, setModalVisible] = useState(false)

    return (

        <View style={styles.container}>
            <Text style={styles.tex}>3 X 1 = 3</Text>
            <Text style={styles.tex}>3 X 2 = 6</Text>
            <Text style={styles.tex}>3 X 3 = 9</Text>
            <Text style={styles.tex}>3 X 4 = 12</Text>
            <Text style={styles.tex}>3 X 5 = 15</Text>
            <Text style={styles.tex}>3 X 6 = 18</Text>
            <Text style={styles.tex}>3 X 7 = 21</Text>
            <Text style={styles.tex}>3 X 8 = 24</Text>
            <Text style={styles.tex}>3 X 9 = 27</Text>
            <Text style={styles.tex}>3 X 10 = 30</Text>


            <Modal animationType="slide "
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
