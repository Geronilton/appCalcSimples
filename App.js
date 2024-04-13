import React, {useState} from 'react';
import { Button, StyleSheet, Text,TextInput, View } from 'react-native';

const AppCalcSimples = () => {
  const [getN1, setN1] = useState(' ');
  const [getN2, setN2] = useState(' ');
  const [getRes, setRes] = useState(' ');

  const Somar=()=> {
    console.log('Somar clicado!');
    console.log('N1: ' + getN1 + ' ' + 'N2: ' + getN2);
    const r = parseInt(getN1) + parseInt(getN2)
    setRes(String(r));     
  }

  const Subtrair=()=> {
    console.log('subtrair clicado');
    console.log('N1: ' + getN1 + ' ' + 'N2: ' + getN2);
    const r = parseInt(getN1) - parseInt(getN2)
    setRes(String(r));     
  }

  const Multiplicacao=()=> {
    console.log('Multiplicação clicado');
    console.log('N1: ' + getN1 + ' ' + 'N2: ' + getN2);
    const r = parseInt(getN1) * parseInt(getN2)
    setRes(String(r));     
  }

  const Divisao=()=> {
    console.log('Divisao clicado');
    console.log('N1: ' + getN1 + ' ' + 'N2: ' + getN2);
    const r = parseInt(getN1) / parseInt(getN2)
    setRes(String(r));     
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:45, margin:60}}>Calculadora</Text>
      <Text style= {styles.label}>Digite um numero:</Text>
      <TextInput 
      style={styles.input} 
      value={getN1}
      inputMode='numeric'
      onChangeText={n1 => setN1(n1)}>
      </TextInput>
      <Text style= {styles.label}>Digite outro numero:</Text>
      <TextInput 
      style={styles.input}
      value={getN2}
      inputMode='numeric'
      onChangeText={n2 => setN2(n2)}>
      </TextInput>


      <View style={styles.botoes}>
        <View style={styles.column}>
          <View style={styles.button}>
            <Button title='Somar' onPress={Somar}></Button>
          </View>
          <View style={styles.button}>
            <Button title='Subtrair' onPress={Subtrair}></Button>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.button}>
            <Button title='Multiplicação' onPress={Multiplicacao}></Button>
          </View>
          <View style={styles.button}>
            <Button title='Divisão' onPress={Divisao}></Button>
          </View>
        </View>
      </View>

      <Text style= {styles.label}>Resultado</Text>
      <TextInput style={styles.input} value={getRes}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    width: '75%',
    fontSize:25,
    fontFamily:'bold',
  },
  input:{
    width: '75%',
    borderWidth:1,
    borderRadius:5,
    padding: 10,
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'60%',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%', // Ajuste o tamanho da View que contém o botão
    marginVertical: 5, // Espaçamento vertical entre os botões
  },
});

export default  AppCalcSimples;