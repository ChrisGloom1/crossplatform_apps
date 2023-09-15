// Form.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface FormProps {
  onSubmit: (name: string, email: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
    // Validate name (e.g., it should not be empty)
    if (!text.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    // Basic email validation (checks for the "@" character)
    if (!text.includes('@')) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = () => {
    // Check if there are any validation errors
    if (!nameError && !emailError) {
      // If there are no errors, submit the form
      onSubmit(name, email);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter your name"
      />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Form;
