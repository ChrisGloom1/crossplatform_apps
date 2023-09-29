import React from "react";
import { NativeSyntheticEvent, ScrollView, TextInput, TextInputChangeEventData, View } from "react-native";
import TaskItem from "../TaskItem/TaskItem";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const TaskList: React.FC = () => {

  const [inputValue, setInputValue] = React.useState('')

  const [tasks, setTasks] = React.useState([
    {title: "Vaske klær"}, 
    {title: "Gå ut med søppel"}, 
    {title: "Pusse tenner"}])

  const handleInputChange = (text: string) => {
    setInputValue(text)
  }

  const handleDeleteTask = (index: number) => {
    const updatedTask = [...tasks]
    updatedTask.splice(index, 1)
    setTasks(updatedTask)
  }

  const handleAddTask = () => {
    if (inputValue !== "") {
      const updatedTask = [...tasks, {title: inputValue}]
      setTasks(updatedTask)
      setInputValue("")
    }
  }

  const hankleEditTask = () => {

  }
  

  return (
    <View>
      <ScrollView>
        {tasks.map((task, index) => {
          const { title } = task;
          return (
            <TaskItem
              key={index}
              title={title}
              onDelete={() => handleDeleteTask(index)}
              onEdit={() => {}}
            />
          );
        })}
      </ScrollView>
        <View style={styles.wrapper}>
          <TextInput
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Skriv inn oppgave"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
            <Text>Legg til</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#eeffdd"
  },
  wrapper: {
    marginTop: 20,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    color: "black",
    backgroundColor: "#f3f3f3",
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
    width: "75%",
  }
});

export default TaskList;