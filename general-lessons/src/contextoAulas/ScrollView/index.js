import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

function ScrollViewExample() {
  return (
    <ScrollView>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});

export default ScrollViewExample;
