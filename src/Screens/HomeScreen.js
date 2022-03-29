import React,{useState} from "react";
import { View, StyleSheet, Text, TextInput, Button,Alert } from "react-native";

import Color from "../Context/Color";





const HomeScreen = ({navigation}) => {
const [text, onChangeText] = useState("");
    return (
        <View style={myStyles.BackGround}>
            <Text style={myStyles.TextTopic}>Rock Paper Scissors Game</Text>
            <Text style={myStyles.TextTitle}>Please enter your name!!</Text>
            <TextInput style={myStyles.TextInput} onChangeText={onChangeText} value ={text} />
            <View style={myStyles.TextButton}>
                {text===""?<Button
                    title="Submit your name"
                    onPress={()=> Alert .alert("eiei")}
                    color={Color.primary}
                />
                :<Button
                    title="Submit your name"
                    onPress={()=>navigation.navigate("Select",{ data: text })}
                    color={Color.primary}
                />}
               
            </View>
                
        </View>
    );
};

const myStyles = StyleSheet.create({
    TextTopic: {
        fontSize: 20,
        color: "red",
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
        marginVertical: 8,
    },
    TextTitle: {
        fontSize: 18,
        textAlign: "center"
    },
    TextInput: {
        fontSize: 16,
        borderWidth: 1,
        margin: 10,
        fontSize: 18,
        padding: 5,
        textAlign: "center"
    },
    BackGround: {
        backgroundColor: Color.five
        
    },
    TextButton: {
        width: 400,
        height: 800,
        textAlign: "center",
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: "red",
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        borderRadius: 10
    }
});

export default HomeScreen 