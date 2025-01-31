import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
    const[name,setName] = useState("");

    return (
        <View>
            <StatusBar/>
            <Text>Name:</Text>
            <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
            <Button title='Submit'
                    onPress={()=>{
                        let mydata = JSON.parse(route.params.datastr);
                        let item = {name:name};
                        mydata.push(item);
                        fetch("https://a387a70eb15c40179c9f3568e363a392.api.mockbin.io/",
                            {method:"POST",
                                headers:{
                                "Content-Type": "application/json",
                                "Authorization": "1234567890"
                                },
                                body:JSON.stringify(mydata)
                            }
                        )
                        .then(response =>{
                            navigation.navigate("Home");
                        })
                    }}
            />
        </View>
    );
};

export default Add;
