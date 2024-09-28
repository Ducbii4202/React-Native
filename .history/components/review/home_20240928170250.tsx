import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeSreen = () => {
    const navigation: NavigationProp<ParamListBase>= useNavigation()
    return (
        <View>
            <Text style={{fontSize: 40}}>
                Home Sreen
            </Text>
            <Button title='home-page'
            onPress={()=> navigation.navi}/>
        </View>
    );
};

export default HomeSreen;