import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
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
  entryContainer: {
    flex: 5,
  },
});
