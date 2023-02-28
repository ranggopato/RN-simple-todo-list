import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.opacity}
      onPress={onDelete.bind(this, itemData.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  opacity: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
