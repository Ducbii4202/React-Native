import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { OPENSAN_REGULAR } from '../../utils/const';
import { NavigationProp, useNavigation, RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const DetailSreen = () => {
    const styles = StyleSheet.create({
        review: {
            fontSize: 30,
            fontFamily: OPENSAN_REGULAR,
        }
    })
    const navigation: NavigationProp<RootStackParamList> = useNavigation()
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();
    
    return (
        <View>
            <Text style={styles.review}>
                Detail Sreen
            </Text>
            <Button title='Home Page'
            onPress={()=> navigation.navigate('Home')}/>
            
        </View>
    );
};

export default DetailSreen;