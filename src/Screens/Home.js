import React, { useState,useEffect } from "react";
import { Text, View } from "native-base";
import { SafeAreaView, StatusBar } from "react-native";
//components
import { SearchBar,ResultsList } from "../Components";

//HOOKS
import useResults from '../Hooks/useResults'

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [results,errorMsg,searchApi] =useResults()

  const filterByPrice =(price)=>{
      return results.filter(result=>{
          console.log(result)
      });
  }

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
        onTermSubmit={()=>searchApi(term)}
      />
      <ResultsList results={filterByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterByPrice('$$')} title="Pricier" />
      <ResultsList results={filterByPrice('$$$')} title="Cheap" />
    </SafeAreaView>
  );
};

export default HomeScreen;
