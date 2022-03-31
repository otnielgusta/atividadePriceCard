import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import PlanoComponnent from './plano_componnent';

export default function Produtos({ navigation }) {

  const [planos, setPlanos] = useState([]);

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [itemDescricao, setItemDescricao] = useState('');
  const [descricao, setDescricao] = useState(['']);

  return (
    <View style={styles.container}>
      <View style={styles.viewForm}>
        <View style={styles.viewInput}>
          <Text>Nome do plano</Text>
          <TextInput
            value={nome}
            onChangeText={(value) => {
              setNome(value);
            }
            }
            style={styles.textInput}
          ></TextInput>
        </View>
        <View>
          <Text>Valor</Text>
          <TextInput
            value={preco}
            onChangeText={(value) => {

              setPreco(value);
            }}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View>
          <Text>Descrição</Text>
          <TextInput
            value={itemDescricao}
            onChangeText={(value) => {
              setItemDescricao(value)
            }}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              setDescricao([...descricao, itemDescricao]);
              setItemDescricao("");
              console.log(descricao)
            }
            }
            style={styles.btnDescricao}

          ><Text style={styles.textButton}>Adicionar Descrição</Text></TouchableOpacity>
          <View style={styles.descView}>
            {
              descricao.map((item) => {
                return <Text>{item}</Text>
              })
            }
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            const dados = {
              nome: nome,
              preco: preco,
              descricao: descricao
            };
            setPlanos([...planos, dados]);
            setNome("");
            setPreco("");
            setDescricao([])
          }}
          style={styles.btnPlano}
        ><Text style={styles.textButton}>Adicionar Plano</Text> </TouchableOpacity>

      </View>
      {
        planos.map((data) => {
          console.log(data);
          return <PlanoComponnent plano={data} />
        })
      }

      {/* <TouchableOpacity style={styles.botao} onPress={()=> {navigation.navigate('Janela2', {texto: "Texto teste da janela 2"})}} >Janela 2</TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.botao} onPress={()=> {navigation.replace('Janela3', {texto: "Texto teste da janela 3"})}} >Janela 3</TouchableOpacity> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#87ceeb',
    alignItems: 'center',

  },
  title: {
    fontSize: 32,
    marginTop: 30
  },

  botao: {
    marginBottom: 30,
    backgroundColor: 'blue',
    width: '30%',
    height: 40,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  viewForm: {
    marginTop: "20px",
    flexDirection: "column",
  },
  viewInput: {
    flexDirection: "column",

    marginBottom: "10px",
  },
  textInput: {
    width: "200px",
    height: "30px",
    backgroundColor: "#fff",
    borderRadius: "5px"
  },
  btnDescricao: {
    borderRadius: "5px",
    marginTop: 5,
    backgroundColor: '#626262',
    height: 40,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  descView:{
    marginTop: "10px",
    backgroundColor: "#fff",
    textAlign:'center',
    borderRadius: "5px"
  },

  btnPlano: {
    borderRadius: "5px",
    marginBottom: 30,
    marginTop: 5,
    backgroundColor: 'green',
    height: 40,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  textButton:{
    color: "#fff",

  }
});
