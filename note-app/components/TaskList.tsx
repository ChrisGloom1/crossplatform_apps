import React from "react";
import { ScrollView } from "react-native";
import TaskItem from "./TaskItem";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TaskList = () => {

  const [tasks, setTasks] = React.useState([
    {title: "Vaske klær", desc: "Vaske klærne mine i vaskemaskinen"}, 
    {title: "Gå ut med søppel", desc: "Gå ut med søpla fra i går"}, 
    {title: "Pusse tenner", desc: "Pusse tennene mine på badet"}])

  const handleDeleteTask = (index: number) => {
    const updatedTask = [...tasks]
    updatedTask.splice(index, 1)
    setTasks(updatedTask)
  }

  const handleAddTask = () => {
    const updatedTask = [...tasks]
    updatedTask.push({title: "Sove", desc: "Sove til klokka 08:00"})
    setTasks(updatedTask)
  }

  return (
    <ScrollView>
      {tasks.map((task, index) => {
        const { title, desc } = task; // Destructure the task object
        return (
          <TaskItem
            key={index}
            title={title}
            desc={desc}
            onDelete={() => handleDeleteTask(index)}
          />
        );
      })}
      <TouchableOpacity onPress={handleAddTask} style={styles.button}>
        <Text>Legg til nytt notat</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
  marginTop: 40,
    alignItems: "center",
    maxWidth: 170,
    marginBottom: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  }
});

export default TaskList;