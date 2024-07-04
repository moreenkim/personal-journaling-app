import React from "react";
import { StyleSheet, View, Text } from "react-native";

function EntryItem(props) {
  return (
    <View style={styles.entryItem}>
      <Text style={styles.entryText}>{props.text} </Text>
    </View>
  );
}

export default EntryItem;

const styles = StyleSheet.create({
  entryItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5b64a4",
    padding: 8,
  },
  entryText: {
    color: "white",
  },
});
