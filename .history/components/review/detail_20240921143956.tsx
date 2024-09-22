import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const DetailSreen = () => {
    const styles = StyleSheet.create({
        review: {
            fontSize: 30,
            fontFamily: 'hoidanit',
        }

    })
    return (
        <View>
            <Text style={styles.review}>
                Detail Sreen
            </Text>
            
        </View>
    );
};

export default DetailSreen;