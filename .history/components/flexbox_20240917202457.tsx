import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 40,

    }
})

const flexbox = () => {
    return (
        <View style={styles.container}>
            <VIew>
                <Text> item 1</Text>
            </VIew>
            <VIew>
                <Text> item 2</Text>
            </VIew>
            <VIew>
                <Text> item 3</Text>
            </VIew>
            <VIew>
                <Text> item 4</Text>
            </VIew>
           

        </View>
    );
};

export default flexbox;