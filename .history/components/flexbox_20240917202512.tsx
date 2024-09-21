import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 40,

    }
})

const flexbox = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text> item 1</Text>
            </View>
            <View>
                <Text> item 2</Text>
            </View>
            <View>
                <Text> item 3</Text>
            </View>
            <View>
                <Text> item 4</Text>
            </View>
           

        </View>
    );
};

export default flexbox;