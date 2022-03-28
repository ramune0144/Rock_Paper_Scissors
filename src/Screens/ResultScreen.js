import React from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
//   onPress={() => navigation.navigate("ProfileScreen",{ data: item })}
const ResultScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item.pointuse);
  console.log(item.pointai);
  return (
    <View>
      <Text style={myStyles.TextTopic}>Result</Text>
      <Text style={myStyles.TextTitle}>{item.data} : AI</Text>
      <Text style={myStyles.TextTitle}>
        {item.pointuse} : {item.pointai}
      </Text>
      {(() => {
        if (item.pointuse > item.pointai) {
          return <Text style={myStyles.TextTitle}>win</Text>;
        } else if (item.pointuse < item.pointai) {
          return <Text style={myStyles.TextTitle}>lose</Text>;
        } else if(item.pointuse === item.pointai) {
          return <Text style={myStyles.TextTitle}>draw</Text>;
        }
      })()}
   
      <View style={myStyles.TextButton}>
        <Button
          title="Try again"
          onPress={() => navigation.navigate("Select", { data: item.data })}
        />
        <Button
          title="Go back home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  TextTopic: {
    fontSize: 50,
    textAlign: "center",
  },
  TextTitle: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  TextButton: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ResultScreen;
