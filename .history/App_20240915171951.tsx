
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
      name: 'bjbad',
      age: 20,
    },{
      id: 3,
      name: 'thanh',
      age: 21,
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
    paddingTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
