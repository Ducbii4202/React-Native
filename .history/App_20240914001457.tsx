
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("thang");
  return (
    <View style={styles.container}> 
      <Text style={{fontSize:40, fontWeight:"600"}}>
      {name} ducbii
      </Text>
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
