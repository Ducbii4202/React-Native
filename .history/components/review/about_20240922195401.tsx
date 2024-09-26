import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
    }
})
const AboutSreen = () => {
    return (
        <View>
            <Text style={[styles.about]}>
                About Sreen
            </Text>
            
        </View>
    );
};

export default AboutSreen;