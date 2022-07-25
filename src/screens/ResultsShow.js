import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShow = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResultApi = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResultApi(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginLeft: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsShow;
