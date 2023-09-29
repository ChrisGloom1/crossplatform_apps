import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Assets from "../../Assets";

type ListItem = {
  title: string,
  isCompleted: boolean
}

const TodoArray: ListItem[] = []

const TodoListItem: React.FC<ListItem> = ({title, isCompleted}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isCompleted ? <Text>Completed</Text> : <Text>Not completed</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    padding: 10
  }
})

export default TodoListItem