import React, {useState} from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

export default function SwitchExample() {
  const [status, setStatus] = useState(false);

    return (
      <View style={styles.container}>
        
          <Switch 
           value={status}
           onValueChange={(selectedValue) => setStatus(selectedValue)}
           trackColor={{false: '#121212', true: '#00ff00'}}
           thumbColor={status ? '#121212' : '#f4f4f4'}
          />

          <Text style={{textAlign: 'center', fontSize: 25}}> Status: {status ? 'Ativo' : 'Inativo'}</Text>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
