import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Pessoa from "./Components/Pessoa";

// function Pessoa(props) {
//   return (
//     <View style={styles.areaPessoa}>
//       <Text style={styles.textoPessoa}> {props.data.nome}</Text>
//       <Text style={styles.textoPessoa}> {props.data.idade}</Text>
//       <Text style={styles.textoPessoa}> {props.data.email}</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
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
});

export default function FlatListExample() {
  const [feed, setFeed] = useState([
    { _id: 1, nome: "Vitor", idade: 40, email: "teste@teste.com" },
    { _id: 2, nome: "Lucas", idade: 23, email: "teste2@teste.com" },
    { _id: 3, nome: "Ana", idade: 19, email: "teste3@teste.com" },
    { _id: 4, nome: "Henrique", idade: 40, email: "teste4@teste.com" },
  ]);

  return (
    <FlatList
      data={feed}
      keyExtractor={(item) => item._id} // transforma uma propriedade de um obj na chave unica de identificação
      renderItem={({ item }) => <Pessoa data={item} />}
    />
  );
}
