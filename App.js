import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("")

  const [personalGoals, setPersonalGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText)
  }

  function addGoalHandler() {
    setPersonalGoals((currentGoals) => [...currentGoals, enteredText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Personal goals here" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {personalGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}{" "}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
     borderBottomColor: "#4976b6"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5b64a4",
    padding: 8,
  },
  goalText : {
    color: "white",
  }
});
