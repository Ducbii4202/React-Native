
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge]= useState("");
  
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    
    </View>
  );
}


//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: "violet",
    borderColor: "pink",
    borderWidth: 1,
    fontSize: 30,
    padding:10,
  },
  header: {
    fontSize: 30,
    fontWeight:"600",
  },
  input: {
    borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 15,
  }
});
