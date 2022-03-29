import {StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function PlanoComponnent(props){
    return(
        
        <View style={styles.container}>

            <Text style={styles.nome}>{props.plano.nome}</Text>
            <Text style={styles.preco}>{props.plano.preco}</Text>
            <View style={styles.descricaoView}>

            {
                props.plano.descricao.map((data) =>{ return <Text style={styles.descricao}>{data}</Text>})
            }             
            </View>
            <TouchableOpacity style={styles.botao} onPress={()=> alert(props.plano.nome +' de '+ props.plano.preco+' contratado')}><Text>Contratar</Text></TouchableOpacity>
                       
        </View>
    );

}

const styles = StyleSheet.create({
    container: { 
        width:250,
        height:250,
        margin:20,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:5
    },
    nome:{
        color:'blue',
        fontWeight:"800",
        fontSize:24
    },
    preco:{
        fontWeight:"800",
        fontSize:42
    },
    descricaoView:{
        justifyContent:'center',
        alignItems:'center'
    },
    descricao:{

    },
    botao:{
        backgroundColor:'blue',
        width:'90%',
        height: 40,
        color:"#fff",
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'sans-serif'
    }
   
  });

 