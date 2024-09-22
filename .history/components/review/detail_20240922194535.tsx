import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { OPENSAN_REGULAR } from '../../utils/const';

const DetailSreen = () => {
    const styles = StyleSheet.create({
        review: {
            fontSize: 30,
            fontFamily: OPENSAN_REGULAR,
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