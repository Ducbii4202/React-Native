
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>

      {/* form */}
      <View>
        <Text> form</Text>
      </View>

      {/* list todo */}
      <View>
        <Text>List todo</Text>
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
  }
  
});
