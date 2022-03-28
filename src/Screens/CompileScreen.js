import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";

const CompileScreen = ({navigation,route}) => {
    const item = route.params;
    console.log(item)
    return (
        <View>
            <Text style={myStyles.TextRound}>Round : </Text>
            <Text style={myStyles.TextTitle}>{item.data}</Text>
            <Text>{"\n \n \n"}</Text>
            <Text style={myStyles.TextBetween}>With</Text>
            
            <Text style={myStyles.TextTitle}>AI</Text>
            <Text>{item.data} (แพ้ / ชนะ) (ยินดีด้วย!! / ลองใหม่อีกครั้งน้า)</Text>
            <Button
                title = "OK"
                onPress={()=>navigation.navigate("Result",{ data:item.data })}
            />
        </View>
    );
};

const myStyles = StyleSheet.create({
    TextRound: {
        fontSize: 18,
        textAlign: "left",
        marginBottom: 10,
        marginTop: 20,
    },
    TextTitle: {
        fontSize: 25,
        textAlign : "center"
    },
    TextBetween: {
        fontSize: 20,
        textAlign : "center"
    },
})

export default CompileScreen