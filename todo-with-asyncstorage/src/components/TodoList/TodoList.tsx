import React from "react"
import { View, Text, StyleSheet } from "react-native"
import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList: React.FC = () => {

  

  return (
    <View style={styles.container}>
      <TodoListItem title={"Tittel"} isCompleted={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
  },
  title: {
    fontSize: 30,
  }
})

export default TodoList