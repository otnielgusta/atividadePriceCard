import { StyleSheet, Text, View } from 'react-native';

export default function Janela2({navigation, route}) {

  return (
    <View style={styles.container}>
        <Text>{route.params.texto}</Text>
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
