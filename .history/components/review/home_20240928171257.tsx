import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { _View, Button, FlatList, Text, View } from 'react-native';


interface IRview {
    id: number,
    title: string,
    start: number,
}
const HomeSreen = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation()
    const [review, setReview] = useState<IRview[]>([
        { id: 1, title: "Review", start: 3 },
        {id: 2, title: "Hello", start: 5},
        {id: 3, title: "Nihao", start: 7},
        
    ])
    return (
        <View>
            <Text style={{fontSize: 30}}>
                Review List
            </Text>
            <View>
                <FlatList
                    data={review}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return 
                        <View>

                        </View>
                    }}
                />
            </View>
            <Button title='View Detail'
            onPress={()=> navigation.navigate("review-detail")}/>
        </View>
    );
};

export default HomeSreen;