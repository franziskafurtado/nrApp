//Importando bibliotecas
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function InspecaoExterna5({ route }) {
  const navigation = useNavigation();
  //criacao da funcao ir para tela de confirmacao
  function irTelaConfirmacao(){
    navigation.navigate('TelaConfirmacao');
  }

  const [selectedValue, setSelectedValue] = useState("Selecione Uma opção");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}>
      
    <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="Java" value="java" /> 
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  
    </View> 

    <Button // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />
       
    <Button //botao que chama a funcao ir para revisao
    title="Ir para Revisão"
    onPress={ irTelaConfirmacao }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }