
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
      name: 'thang',
      age: 20,
    },{
      id: 3,
      name: 'thanh',
      age: 21,
    },
  ])
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>Hello world</Text>
      <View>
        {student.map(item => {
          return (
            <View key={item.id} style={{
              padding: 30, 
              backgroundColor: 'pink',
              marginBottom: 30,
            }}>
              <Text >
                {item.name}
              </Text>
            </View>
          )
        })}
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
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
