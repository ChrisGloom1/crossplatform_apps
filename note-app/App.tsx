import { StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import React from 'react';
import TaskList from './components/TaskList/TaskList';

const addTask = () => {
  
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bare gjør, brusj!</Text>
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
    justifyContent: 'center',
    alignSelf: "center",
    padding: 20,
    width: "95%"
  },
  title: {
    fontSize: 24,
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
