import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}> Nome: {props.data.nome}</Text>
      <Text style={styles.textoPessoa}> Cargo: {props.data.idade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: "#202A44",
    height: 200,
    paddingHorizontal: 25,
    justifyContent: "center",
  },

  textoPessoa: {
    color: "#fff",
    fontSize: 25,
  },
});

export default Pessoa;
