import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

function EntryInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function entryInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addEntryHandler() {
    props.onAddEntry(enteredText);
    setEnteredText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Personal Entry here"
        onChangeText={entryInputHandler}
        value={enteredText}
      />
      <Button title="Add Entry" onPress={addEntryHandler} />
    </View>
  );
}

export default EntryInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#4976b6",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
