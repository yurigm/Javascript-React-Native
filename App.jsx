import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import Card from './src/components/Card';
import { Dimensions } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Mother Breakfast', description: 'I need to do my mother breakfast', date: new Date() },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());


  const addTodo = () => {
    const newTodo = { id: todos.length + 1, title, description, date };
    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
    setDate('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Today</Text>
      <Text style={styles.subtitle}>wake up go ahead do the thing not tomorrow, do today.</Text>
      <Text style={styles.todo}>To do</Text>

      <View style={styles.cardList}>
        {todos.map(({ id, title, description, date }, index) => (
          <Card key={index} title={title} description={description} date={date} onRemove={() => removeTodo(id)}>
          </Card>
        ))}
      </View>

      <View>
        <TextInput
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          placeholder="Data"
          value={date}
          onChangeText={setDate}
        />

        <Button title="Adicionar" onPress={addTodo} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2A',
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
    minHeight: Dimensions.get('window').height,
  },
  cardList: {
    marginTop: 12,
    gap: 8,
  },
  cardRemove: {
    color: 'red',
    fontSize: 12,
    padding: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold' ,
    marginBottom: 50 ,
  },
  todo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold' ,
    marginBottom: 10 ,
  }
});
