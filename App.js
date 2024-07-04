import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import EntryInput from "./components/EntryInput";
import EntryItem from "./components/EntryItem";

export default function App() {
  const [personalEntry, setPersonalEntry] = useState([]);

  function addEntryHandler(enteredText) {
    setPersonalEntry((currentEntries) => [
      ...currentEntries,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <EntryInput onAddEntry={addEntryHandler} />
      <View style={styles.entryContainer}>
        <FlatList
          data={personalEntry}
          renderItem={(itemData) => {
            return <EntryItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  entryContainer: {
    flex: 5,
  },
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
