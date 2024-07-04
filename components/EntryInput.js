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
            <Button title="Add Entry" onPress={addEntryHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel Modal" onPress={props.closeModal}/>
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#4976b6",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button : {
    width: "30%",
    marginHorizontal: 8
  }
});
