import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Todo App</Text>
      <AddTodo/>
      <TodoList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
});