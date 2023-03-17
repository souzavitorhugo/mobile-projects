import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [frase, setFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom senso vale mais do que muito conhecimento',
    'O riso é a menor distância entre duas pessoas',
    'Deixe de lado as preocupações e seja feliz',
    'Realize o óbvio, pense no improvavel e conquiste com o impossivel',
    'Acredite em milagres mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  const quebraBiscoito = () => {
    let randomNumber = Math.floor(Math.random() * frases.length);
    setImg(require('./assets/biscoitoAberto.png'));

    setFrase(`"${frases[randomNumber]}"` );
  }

  const restauraBiscoito = () => {
    setImg(require('./assets/biscoito.png'))

    setFrase(null);
  }

  return (
    <View style={styles.container}>

      <Image 
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {frase} </Text>

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={ () => quebraBiscoito()} style={styles.button}>
          <Text style={[styles.btnArea, {color: 'black'}]}> Quebrar biscoito</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => restauraBiscoito()} style={[styles.button, {borderColor: 'black'}]}>
          <Text style={[styles.btnArea, {color: 'black'}]}> Restaurar biscoito</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  containerButtons: {
    marginVertical: 35
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    color: '#ffa000',
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 25,
    borderColor: '#ffa000',
    borderWidth: 1,
    width: 230,
  },
  btnArea: {
    textAlign: 'center',
    color: '#ffa000'
  }
});
