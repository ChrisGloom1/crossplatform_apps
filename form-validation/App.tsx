import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';

export default function App() {

  const handleSubmit = (name: string, email: string) => {
    console.log(`Name: ${name}, Email: ${email}}`)
  }

  return (
    <View style={styles.container}>
      <Form onSubmit={handleSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
