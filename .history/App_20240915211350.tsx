
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');

  const [listTodo, setListTodo] = useState([
    {
      // id: 1, name: 'watching TV'
    }
  ]);
 
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>

      {/* form */}
      <View>
        <TextInput
        style={styles.todoInput}
        />
        <Button title='Add todo'/>
      </View>

      {/* list todo */}
      <View>
        <Text>List todo</Text>
        <Text>{JSON.stringify(listTodo)}</Text>
      </View>
     
    </View>
  );
}


//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 30,
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    padding: 5,
    marginHorizontal: 15,
    margin: 15.

  }
  
});
