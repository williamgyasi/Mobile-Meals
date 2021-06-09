import React, { useState } from "react";
import { Text, View } from "native-base";
import { SafeAreaView, StatusBar } from "react-native";
//components
import { SearchBar } from "../Components";

//API
import yelp from "../Api/Yelp";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "san jose",
      },
    });
    // console.log(response.data)
    setResults(response.data.businesses);
  };


  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      <Text>we have found {results.length} results</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
