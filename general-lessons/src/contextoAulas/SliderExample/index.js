import React, {useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

export default function SliderExample() {
  const [valor, setValor] = useState(50);
    return (
      <View style={styles.container}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={valor}
            onValueChange={(value) => setValor(value)}
            step={1}
          />

          <Text style={{textAlign: 'center', fontSize: 25}}> Valor: {valor} </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
