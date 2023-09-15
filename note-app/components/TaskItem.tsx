import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

interface ITaskItemProps {
  title: string
  desc: string
  onDelete: () => void
}

const TaskItem: React.FC<ITaskItemProps> = ({title, onDelete}) => {
  return (
    <View style={styles.task}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffcc91",
    width: 350,
    padding: 20,
    borderRadius: 4,
  }
})

export default TaskItem