
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
      id: 4,
      name: 'thanh',
      age: 21,
    },{
      id: 5,
      name: 'thanh',
      age: 21,
    },{
      id: 6,
      name: 'thanh',
      age: 21,
    },{
      id: 7,
      name: 'thanh',
      age: 21,
    },{
      id: 8,
      name: 'thanh',
      age: 21,
    },
  ])
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>Hello world</Text>
      <ScrollView>
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
    </ScrollView>
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
