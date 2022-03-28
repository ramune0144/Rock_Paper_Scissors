import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";

import Color from "../Context/Color";

const SelectScreen = ({route ,navigation}) => {
    const item = route.params;
    console.log(item.data)
    return (
        
        <View style={myStyles.BackGround}>
            <Text style={myStyles.TextHello}>Hello : {item.data} !!</Text>
            <Text style={myStyles.TextTitle}>Please select a judging round!!</Text>
            <Button  
                title = "1 Round"
                onPress={()=>navigation.navigate("Ingame",{ data:item.data,round:1 })}
            />
            <Text style={myStyles.TextTitle}>or</Text>
            <Button 
                title = "3 Round"
                onPress={()=>navigation.navigate("Ingame",{ data:item.data ,round:3})}
            />
        </View>
    );
};

const myStyles = StyleSheet.create({
    TextHello : {
        fontSize: 25,
        textAlign: "left"
    },
    TextTitle : {
        fontSize: 20,
        textAlign: "center"
    },
    BackGround: {
        backgroundColor: Color.five
        
    },
})

export default SelectScreen