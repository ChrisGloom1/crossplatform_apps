import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import TodoList from "./src/components/TodoList/TodoList"

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeed4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
