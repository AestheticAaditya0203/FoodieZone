import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === $ || $$ || $$$ || $$$$
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <SearchList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <SearchList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <SearchList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
