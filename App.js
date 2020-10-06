
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Pages/Home';
import Tabuada from './src/Pages/Tabuada';
import Teste from './src/Pages/Teste';
import Ta1 from './src/Tabuada/Tab1/Ta1';
import Ta2 from './src/Tabuada/Tab2/Ta2';
import Ta3 from './src/Tabuada/Tab3/Ta3';
import Ta4 from './src/Tabuada/Tab4/Ta4'; 
import Ta5 from './src/Tabuada/Tab5/Ta5';
import Ta6 from './src/Tabuada/Tab6/Ta6';
import Ta7 from './src/Tabuada/Tab7/Ta7';

import Ta8 from './src/Tabuada/Tab8/Ta8';
import Ta9 from './src/Tabuada/Tab9/Ta9';
import Ta10 from './src/Tabuada/Tab10/Ta10';



export default function App() {

const Stack = createStackNavigator();


  return (
               <NavigationContainer>
                 <Stack.Navigator>
                   <Stack.Screen name="Home" component={Home} options={{ title:'Bem Vindo',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />

                   <Stack.Screen name="Tabuada" component={Tabuada}  options={{ title:'Tabuadas',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />

                   <Stack.Screen name="Teste" component={Teste} options={{ title:'JOGO',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} /> 
                   
                   <Stack.Screen name="Ta1" component={Ta1}options={{ title:'Tabuada de 1',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />  

                   <Stack.Screen name="Ta2" component={Ta2} options={{ title:'Tabuada de 2',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} /> 

                   <Stack.Screen name="Ta3" component={Ta3} options={{ title:'Tabuada de 3',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} /> 

                   <Stack.Screen name="Ta4" component={Ta4} options={{ title:'Tabuada de 4',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} /> 

                   <Stack.Screen name="Ta5" component={Ta5}options={{ title:'Tabuada de 5',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />  

                   <Stack.Screen name="Ta6" component={Ta6}options={{ title:'Tabuada de 6',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />  

                   <Stack.Screen name="Ta7" component={Ta7}options={{ title:'Tabuada de 7',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />  

                   <Stack.Screen name="Ta8" component={Ta8} options={{ title:'Tabuada de 8',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} /> 

                   <Stack.Screen name="Ta9" component={Ta9}options={{ title:'Tabuada de 9',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} />  

                   <Stack.Screen name="Ta10" component={Ta10} options={{ title:'Tabuada de 10',
                   headerStyle:{backgroundColor:'#6A5ACD'}
                   ,headerTintColor:'#fff', 
                   headerTitleAlign:'center'}} /> 
                 </Stack.Navigator>
               </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
