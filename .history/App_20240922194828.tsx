import React from 'react';
import { Text, View } from 'react-native';
import HomeSreen from './components/review/home';
import DetailSreen from './components/review/detail';
import AboutSreen from './components/review/about';


import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { OPENSAN_REGULAR } from './utils/const';


SplashScreen.preventAutoHideAsync();


const App = () => {
    const [loaded, error] = useFonts({
    [OPENSAN_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    
    useEffect(() => {
    if (loaded || error) {
    SplashScreen.hideAsync();
    }
    }, [loaded, error]);
    if (!loaded && !error) {
    return null;
    }
    return (
        <View>
            <HomeSreen />
            <DetailSreen />
            <AboutSreen/>
        </View>
    );
};

export default App;