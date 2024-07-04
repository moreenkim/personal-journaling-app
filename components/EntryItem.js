import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function EntryItem(props) {
  return (
    <View style={styles.entryItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.entryText}>{props.text} </Text>
      </Pressable>
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
