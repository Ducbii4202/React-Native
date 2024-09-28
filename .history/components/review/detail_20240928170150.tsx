import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { OPENSAN_REGULAR } from '../../utils/const';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const DetailSreen = () => {
    const styles = StyleSheet.create({
        review: {
            fontSize: 30,
            fontFamily: OPENSAN_REGULAR,
        }
    })
    const navigation: NavigationProp<RootStackParamList>= useNavigation()
    return (
        <View>
            <Text style={styles.review}>
                Detail Sreen
            </Text>
            <Button title='Review-detail'
            onPress={()=> navigation.navigate('Home')}/>
            
        </View>
    );
};

export default DetailSreen;