import React , {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

interface IFormProps {
  onSubmit: (name: string, email: string) => void
}

const Form:React.FC<IFormProps> = ({ onSubmit }) => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('Name is required')
  const [emailError, setEmailError] = useState('eMail is required')

  const handleNameChange = (text: string) => {
    setName(text)
    if (!text.trim()) {
      setNameError('Name is required')
    } else {
      setNameError('')
    }
  }

  const handleEmailChange = (text: string) => {
    setEmail(text)
    if (!text.includes('@')) {
      setEmailError('Invalid email')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = () => {
    if (!nameError && !emailError) {
    onSubmit(name, email)
    }
  }
  
  return (
    <View style={styles.container}>

      <Text style={styles.label}>Name: </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
        placeholder='Enter your name'
      />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

      <Text style={styles.label}>Email: </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder='Enter your email'
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TouchableOpacity style={styles.button}>
        <Button title='Submit' onPress={handleSubmit} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 2
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: -12,
    marginBottom: 15,
    opacity: 0.5
  },
  button: {
    color: 'white',
    marginTop: 20,
    borderColor: 'black',
    borderRadius: 6,
    borderWidth: 1,
  }
})

export default Form;