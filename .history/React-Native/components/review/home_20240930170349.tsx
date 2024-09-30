import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { _View, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface IRview {
    id: number,
    title: string,
    start: number,
}
const HomeSreen = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation()
    const [reviews, setReviews] = useState<IRview[]>([
        { id: 1, title: "Review", start: 3 },
        {id: 2, title: "Hello", start: 5},
        {id: 3, title: "Nihao", start: 7},
        
    ])
    const styles = StyleSheet.create({
        reviews: {
            padding: 15,
            backgroundColor: "fff"
        }
    })
    return (
        <View>
            <Text style={{fontSize: 30}}>
                Review List:
            </Text>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item )=> item.id + ""}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity>
                        <View>
                            <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <Button title='View Detail'
            onPress={()=> navigation.navigate("review-detail")}/>
        </View>
    );
};

export default HomeSreen;