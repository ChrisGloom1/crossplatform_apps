import { StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import React from 'react';
import TaskList from './components/TaskList';

const addTask = () => {
  
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notater</Text>
      <TaskList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  button: {
    marginBottom: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});
