import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    listStyle: {
        borderWidth: 1,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://a387a70eb15c40179c9f3568e363a392.api.mockbin.io/');
                const data = await response.json();
                setMyData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.listStyle}>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View>
            <StatusBar />
            <Button
                title="Add Item"
                onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}
            />
            <FlatList
                data={myData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;

