import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import {Picker } from "@react-native-picker/picker";

export default function PickerExample() {
    const [carroSelecionado, setCarroSelecionado] = useState(0);

    return (
      <View style={styles.container}>
          <Picker
              selectedValue={carroSelecionado}
              onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue) }
          >
              <Picker.Item key={0} value={0} label="Golf 1.6"/> 
              <Picker.Item key={1} value={1} label="Saveiro"/> 
              <Picker.Item key={2} value={2} label="Gol 1.0"/> 
          </Picker>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
