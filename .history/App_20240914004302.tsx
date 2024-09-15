
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount]= useState(0)
  
  return (
    <View style={styles.container}> 
      <Text style={{fontSize:40, fontWeight:"600"}}>
      
      </Text>
      <View>
        <Button title='Increase' onPress={() => alert("tap me")}/>
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
  }
});
