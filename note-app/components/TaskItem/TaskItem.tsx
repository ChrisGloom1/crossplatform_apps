import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

interface ITaskItemProps {
  title: string
  onDelete: () => void
  onEdit: () => void
}

const TaskItem: React.FC<ITaskItemProps> = ({title, onDelete, onEdit}) => {
  return (
    <View style={styles.task}>
      <View>
        <Text>{title}</Text>
      </View>
      <View style={styles.actionBtns}>
        <TouchableOpacity onPress={onEdit}>          
          <Text>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>          
          <Text>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    marginBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffe3c2",
    width: 350,
    padding: 20,
    borderRadius: 4,
  },
  actionBtns: {
    flexDirection: "row",
    gap: 15
  }
})

export default TaskItem