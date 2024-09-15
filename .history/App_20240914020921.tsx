
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge]= useState("");
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>
          Name: {name}</Text>
        <TextInput
          autoCapitalize={"characters"}
        style={styles.input}
        multiline
        onChangeText={(value) => setName(value)}
      />
      </View>

      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>
          Age: {age}</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => setAge(value)}
      />
      </View>
     
      <Text style={{fontSize:40, fontWeight:"600"}}>
      count = {count}
      </Text>
      <View>
        <Button color="#841584"
          title='Increase'
          onPress={() => setCount(count + 1)} />
      </View>
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
