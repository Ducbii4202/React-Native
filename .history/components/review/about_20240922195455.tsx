import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../utils/const';

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
    }
})
const AboutSreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.appFont]}>
                About Sreen
            </Text>
            
        </View>
    );
};

export default AboutSreen;