
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import FlexBox from './components/flexbox';




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

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert('Bug input todo', "Todo ko dc de trong",
        [
          // {
          //   text: 'Cancel',
          //   onPress: () => console.log("OK Pressed"),
          //   style: 'cancel',
          // },
          {text: 'Confirm', onPress: () =>console.log('OK Pressed')}
        ]
      )
      return;
    } 

    setListTodo([...listTodo,
      { id: randomInteger(1, 1000), name: todo }]);
    setTodo('')
  } 

  const deleteTodo = (id: number) => {
    // const newTodo = listTodo.filter(item => item.id !== id);
    // setListTodo(newTodo);
  }  


  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
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
          keyExtractor={item => item.id + ''}
          data={listTodo}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => deleteTodo(item.id)}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
                <Text style={styles.toDoItem}>
          {item.name}
              </Text>
              </Pressable>
        
            )
          }}
        />
      </View>
      </View>
    </TouchableWithoutFeedback>
   
  );
}


//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderWidth: 1,
    borderColor: 'red',
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
