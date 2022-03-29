import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import PlanoComponnent from './plano_componnent';

export default function Produtos({navigation}) {

  const [planos, setPlanos] = useState([
    {
      nome: 'Plano A',
      preco: 'R$ 20,00',
      descricao: ['Leve', 'Barato', 'Bacana']
    },
    
  ]);

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [itemDescricao, setItemDescricao] = useState('');
  const [descricao, setDescricao] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.viewForm}>
        <View style={styles.viewInput}>
          <Text>Nome do plano</Text>
          <TextInput
          onChangeText={(value)=>{
            setNome(value);
          }
          }
            style={styles.textInput}
          ></TextInput>
        </View>
        <View>
          <Text>Valor</Text>
          <TextInput
            onChangeText={(value)=>{

              setPreco(value);
            }}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View>
          <Text>Descrição</Text>
          <TextInput
            onChangeText={(value)=>{
              setItemDescricao(value)
            }}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity  
          onPress={()=>{
            descricao.push(itemDescricao)
            setDescricao(descricao);
          }
          }
            style={styles.btnDescricao}    
              
            ><Text>Adicionar Descrição</Text></TouchableOpacity>
        </View>
        <TouchableOpacity  
            onPress={()=>{
              planos.push({
                nome: 'Plano A',
                preco: 'R$ 20,00',
                descricao: ['Leve', 'Barato', 'Bacana']
              })
              setPlanos(planos);
              console.log(planos.length);
            }}
            style={styles.btnPlano}           
            ><Text>Adicionar Plano</Text> </TouchableOpacity>

      </View>
      {
        planos.map((data) =>{ return <PlanoComponnent plano={data} />})
      }

        {/* <TouchableOpacity style={styles.botao} onPress={()=> {navigation.navigate('Janela2', {texto: "Texto teste da janela 2"})}} >Janela 2</TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.botao} onPress={()=> {navigation.replace('Janela3', {texto: "Texto teste da janela 3"})}} >Janela 3</TouchableOpacity> */}
            
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    
  },
  title:{
    fontSize:32,
    marginTop:30
  },

  botao:{
    marginBottom:30,
    backgroundColor:'blue',
    width:'30%',
    height: 40,
    color:"#fff",
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif'
  },
  viewForm:{
    marginTop: "20px",
    flexDirection: "column",
  },
  viewInput:{
    flexDirection: "column",

    marginBottom: "10px",
  },
  textInput:{
    width: "200px",
    height: "30px",
    backgroundColor: "#fff",
    borderRadius: "5px"
  },
  btnDescricao:{
    marginBottom:30,
    marginTop:5,
    backgroundColor:'#626262',
    height: 40,
    color:"#fff",
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif'
  },

  btnPlano:{
    marginBottom:30,
    marginTop:5,
    backgroundColor:'green',
    height: 40,
    color:"#fff",
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif'
  }
});
