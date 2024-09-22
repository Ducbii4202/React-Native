import React from 'react';
import { Text, View } from 'react-native';
import HomeSreen from './components/review/home';
import DetailSreen from './components/review/detail';
import AboutSreen from './components/review/about';


import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();


const App = () => {
    const [loaded, error] = useFonts({
 'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
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