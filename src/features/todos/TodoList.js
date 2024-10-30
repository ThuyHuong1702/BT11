import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todosSlice'; 

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          onPress={() => dispatch(toggleTodo(todo.id))} 
        >
          <Text
            style={[
              styles.todoText,
              todo.completed ? styles.completed : null, 
            ]}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    width: '100%', // Full width
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Darker color for title
  },
  todoText: {
    margin: 4,
    fontSize: 18,
    padding: 10, // Padding for better touch response
    borderRadius: 5, // Rounded corners
    backgroundColor: '#f9f9f9', // Light background for todos
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
    backgroundColor: '#e0e0e0', // Change background for completed todos
  },
});
