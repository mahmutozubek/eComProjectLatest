import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Paginator({ data }) {
  return (
    <View style={styles.container}>
      {data.map((a, i) => {
        return <View style={styles.dot} key={i.toString()}></View>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection: "row",
    
    height: 64,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'green'
  },
});
