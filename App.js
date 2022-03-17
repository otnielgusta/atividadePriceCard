import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlanoComponnent from './lib/plano_componnent';

export default function App() {

  const planos= [
    {
      nome: 'Plano A',
      preco: 'R$ 20,00',
      descricao: ['Leve', 'Barato', 'Bacana']
    },
    
    {
      nome: 'Plano B',
      preco: 'R$ 30,00',
      descricao: ['Ótimo custo-benefício']
    },
    {
      nome: 'Plano C',
      preco: 'R$ 40,00',
      descricao: ['Sempre conectado', 'Jogos', 'Vídeo']
    },
    {
      nome: 'Plano D',
      preco: 'R$ 50,00',
      descricao: ['Assistência premium', 'Cashback']
    },
    
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planos</Text>
      {
        planos.map((data) =>{ return <PlanoComponnent plano={data} />})
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    
  },
  title:{
    fontSize:32,
    marginTop:30
  }
});
