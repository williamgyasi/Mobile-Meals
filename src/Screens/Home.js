import React, { useState } from "react";
import { Text, View } from "native-base";
import { SafeAreaView, StatusBar } from "react-native";
//components
import { SearchBar } from "../Components";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <SearchBar term={searchTerm} onTermChange={setSearchTerm} onTermSubmit={()=>alert(searchTerm)} />
      <Text>{searchTerm}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
