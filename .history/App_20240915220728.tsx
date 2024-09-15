
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';



interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  const [todo, setTodo] = useState('');

  const [listTodo, setListTodo] = useState<ITodo[]>([]);


  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {setListTodo([...listTodo, {id: randomInteger(1, 1000), name: todo}])
  } 
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>

      {/* form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value)=> setTodo(value)}
        />
        <Button title='Add todo'
        onPress={handleAddTodo}
        />
      </View>

      {/* list todo */}
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          renderItem={({item}) => {
            return (
        <Text style={styles.toDoItem}>
          {item.name}
              </Text>
            )
          }}
        />
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

  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  toDoItem: {
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 10,
  }
  
});
