import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexWrap: 'nowrap', 
    }, 
    item1: {
        backgroundColor: "violet", 
        padding: 40,
    },
    item2: {
        padding: 40,
        backgroundColor: "pink",
    },
    item3: {
        padding: 40,
        backgroundColor: "yellow",
    },
    item4: {
        padding: 40,
        backgroundColor: "cyan",
    },
})

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text> item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text> item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text> item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text> item 4</Text>
            </View>
        </View>
    );
};

export default FlexBox;