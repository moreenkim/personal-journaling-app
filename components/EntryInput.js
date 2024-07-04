import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

function EntryInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function entryInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addEntryHandler() {
    props.onAddEntry(enteredText);
    setEnteredText("");
  }

  return (
    <Modal animationType="slide" visible={props.openModal}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Personal Entry here"
          onChangeText={entryInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel Modal" onPress={props.closeModal} color="#e51a6a" />
          </View>
          <View style={styles.button}>
            <Button title="Add Entry" onPress={addEntryHandler}  color="#95EF10" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default EntryInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ebd6ef'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#fdf7fe",
    borderRadius: 6,
    width: "90%",
    padding: 8,
    color: "black"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
