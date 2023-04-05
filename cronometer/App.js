import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

let timer = null;
let format = '';
let ms = 0;
let ss = 0;
let mm = 0;
let hh = 0;


function App() {
  const [numero, setNumero] = useState(0);
  const [ultimo, setUltimo] = useState(null);
  const [botao, setBotao] = useState('Iniciar');

  function iniciar() {
    if(timer !== null) {
      //se tiver tempo no timer, para.
      clearInterval(timer);
      timer = null;
      setBotao('Iniciar');
    } else {
      timer = setInterval(() => {

        ms++;

        if(ms == 100) {
          ms = 0;
          ss++
        }

        if(ss == 60) {
          ss = 0;
          mm++
        }

        if(ss == 60) {
          ss = 0;
          mm++
        }

        if(mm == 60) {
          mm = 0;
          hh++
        }

        format = 
        (hh < 10 ? '0' + hh : hh) + ':' + 
        (mm < 10 ? '0' + mm : mm) + ':' +
        (ss < 10 ? '0' + ss : ss) + ':' + ms

        setNumero(format);
        setBotao('Pausar')
      }, 1);
    }
  }

  function zerar() {
    clearInterval(timer);
    setUltimo(format);
    timer = null;
    setNumero(0);
    ss = 0;
    hh = 0;
    mm = 0;
    ms = 0;
    setBotao('Iniciar');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={iniciar}> 
          <Text style={styles.btnTexto}> {botao} </Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={zerar}> 
          <Text style={styles.btnTexto}> Zerar </Text> 
        </TouchableOpacity>

      </View>

      <View style={styles.lastArea}>
        <Text style={styles.textoCorrida}> 
          {ultimo ? 'Ultimo tempo: ' + ultimo : ''}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },

  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },

  lastArea: {
    marginTop: 40,
  },

  textoCorrida: {
    fontSize: 15,
    color: '#fff',
    fontStyle: 'italic'
  }
});

export default App;
