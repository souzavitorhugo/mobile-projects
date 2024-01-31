import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  FlatList,
  Text,
} from "react-native";

import FlatListExample from "./src/contextoAulas/FlatList";
import ScrollViewExample from "./src/contextoAulas/ScrollView";
import Desafio1 from "./src/exercicios/M7Ex1";
import PickerExample from "./src/contextoAulas/PickerExample";
import SliderExample from "./src/contextoAulas/SliderExample";
import SwitchExample from "./src/contextoAulas/SwitchExample";

function App() {
  const [feed, setFeed] = useState([
    { _id: 1, nome: "Vitor", idade: 40, email: "teste@teste.com" },
    { _id: 2, nome: "Lucas", idade: 23, email: "teste2@teste.com" },
    { _id: 3, nome: "Ana", idade: 19, email: "teste3@teste.com" },
    { _id: 4, nome: "Henrique", idade: 40, email: "teste4@teste.com" },
  ]);

  return (
    //Scroll view
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* 
      <FlatListExample/>
      <ScrollViewExample/> 
      <Desafio1 />
      <PickerExample/>
      <SliderExample/>
      */}

      <SwitchExample/>

    </SafeAreaView>

    //Flat List
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },

  container: {
    flex: 1,

    borderWidth: 10,
    borderColor: "black",
  },

  box1: {
    height: 250,
    backgroundColor: "red",
  },

  box2: {
    height: 250,
    backgroundColor: "green",
  },

  box3: {
    height: 250,
    backgroundColor: "yellow",
  },

  box4: {
    height: 250,
    backgroundColor: "blue",
  },

  areaPessoa: {
    backgroundColor: "#121212",
    height: 200,
    marginBottom: 15,
    justifyContent: "center",
  },

  textoPessoa: {
    color: "#fff",
    fontSize: 20,
  },

  flatListContainer: {
    marginBottom: 100,
  },
});

export default App;
