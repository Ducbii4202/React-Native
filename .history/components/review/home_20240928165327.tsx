import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeSreen = (props: any) => {
    const navigation = props.navigation;
    return (
        <View>
            <Text style={{fontSize: 40}}>
                Home Sreen
            </Text>
            <Button title='home-page'/>
        </View>
    );
};

export default HomeSreen;