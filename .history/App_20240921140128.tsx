import React from 'react';
import { Text, View } from 'react-native';
import HomeSreen from './components/review/home';
import DetailSreen from './components/review/detail';
import AboutSreen from './components/review/about';

const App = () => {
    return (
        <View>
            <HomeSreen />
            <DetailSreen />
            <AboutSreen/>
        </View>
    );
};

export default App;