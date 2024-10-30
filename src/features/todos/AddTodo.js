import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

export const AddTodo = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSumbit(){
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Todo" value={text} onChangeText={setText} style={styles.input} />
      <Button title="Add" onPress={handleSumbit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row', // Aligns input and button in a row
    justifyContent: 'space-between', // Space between input and button
    alignItems: 'center', // Center items vertically
  },
  input: {
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    padding: 10,
    height: 40,
    borderRadius: 5, 
    flex: 1, 
    marginRight: 10, 
  },
});

