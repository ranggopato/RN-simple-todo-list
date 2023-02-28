import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoal) {
    setCourseGoal((currenCourseGoal) => [
      ...currenCourseGoal,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }
  const deleteGoalHandler = (id) => {
    setCourseGoal((currenCourseGoal) => {
      return currenCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <Text>List of goalss ...</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem onDelete={deleteGoalHandler} itemData={itemData.item} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
