
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello1}>Hello world with1</Text>
      <Text>Hello world with ducbii</Text>
    </View>
  );
}

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
  }
});
