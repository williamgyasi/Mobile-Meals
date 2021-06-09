import React, { useState, useEffect } from "react";
import { Text, View } from "native-base";
import { SafeAreaView, StatusBar, ScrollView, } from "react-native";
//components
import { SearchBar, ResultsList } from "../Components";

//HOOKS
import useResults from "../Hooks/useResults";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [results] = useResults();

  console.log(results);

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
         
          results={filterByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterByPrice("$$")}
          
          title="Pricier"
        />
        <ResultsList
          results={filterByPrice("$$")}
          
          title="Cheap"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
