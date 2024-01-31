import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Usuario from "./components/Usuario";

export default function Desafio1() {
  return (
    <View>
      <Text style={style.textContainer}> Seja bem vindo! </Text>

      <Usuario />
    </View>
  );
}

const style = StyleSheet.create({
  textContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
