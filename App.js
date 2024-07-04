import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import EntryInput from "./components/EntryInput";
import EntryItem from "./components/EntryItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [personalEntry, setPersonalEntry] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addEntryHandler(enteredText) {
    setPersonalEntry((currentEntries) => [
      ...currentEntries,
      { text: enteredText, key: Math.random().toString() },
    ]);
    closeAddEntryModalHandler();
  }

  function deleteEntryHandler(id) {
    setPersonalEntry((currentEntries) => {
      return currentEntries.filter((entry) => entry.id !== id);
    });
  }

  function openAddEntryModalButtonHandler() {
    setModalVisible(true);
  }

  function closeAddEntryModalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Entry"
          color="#bdc13e"
          onPress={openAddEntryModalButtonHandler}
        />

        <EntryInput
          onAddEntry={addEntryHandler}
          openModal={modalVisible}
          closeModal={closeAddEntryModalHandler}
        />
        <View style={styles.entryContainer}>
          <FlatList
            data={personalEntry}
            renderItem={(itemData) => {
              return (
                <EntryItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteEntryHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
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
