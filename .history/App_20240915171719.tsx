
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [student, setStudent] = useState([
    {
      id: 1,
      name: 'bii',
      age: 18,
    },{
      id: 2,
      name: 'bii',
      age: 18,
    },{
      id: 3,
      name: 'bii',
      age: 18,
    },
  ])
  
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
  
});
