import React, { useState } from "react";
import { FlatList } from "react-native";
import Pessoa from "../../../../contextoAulas/FlatList/Components/Pessoa";

export default function Usuario() {
  const [user, setUser] = useState([
    { _id: 1, nome: "Vitor Hugo de Souza", idade: 40, cargo: "Programador" },
  ]);

  return (
    <FlatList data={user} renderItem={({ item }) => <Pessoa data={item} />} />
  );
}
