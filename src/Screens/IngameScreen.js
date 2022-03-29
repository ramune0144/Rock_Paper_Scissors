import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1=ham ;2=s ;3=pa



const IngameScreen = ({ navigation, route }) => {
    const [count_ai, setcount_ai] = useState(0);
    const [count_player, setcount_player] = useState(0);
    const [count_draw, setcount_draw] = useState(0);
    const [round, setround] = useState(0);
    const [rand_, setrand_] = useState(0);
    const AI_map = ["Hammer","Scissors","Paper"]
    const Result = (select) => {
        const rand_ = randomInteger(1, 3);
        setrand_(rand_)
        setround(round + 1)
        console.log(select)
        if (select === rand_) {
          setcount_draw(count_draw+1)
          setcount_ai(count_ai + 0);
          setcount_player(count_player + 0);
        } else if (select === 1 && rand_ === 2) {
          setcount_player(count_player + 1);
        } else if (select === 1 && rand_ === 3) {
          setcount_ai(count_ai + 1);
        } else if (select === 2 && rand_ === 1) {
          setcount_ai(count_ai + 1);
        } else if (select === 2 && rand_ === 3) {
          setcount_player(count_player + 1);
        } else if (select === 3 && rand_ === 1) {
          setcount_player(count_player + 1);
        } else if (select === 3 && rand_ === 2) {
          setcount_ai(count_ai + 1);
        }


    }
  const item = route.params;
 
 
  return (
    <View>
      <Text style={myStyles.TextRound}>round:{round} </Text>
      <Text style={myStyles.TextRound}>AI_score:{count_ai} </Text>
      <Text style={myStyles.TextRound}>player_score:{count_player} </Text>
      <Text style={myStyles.TextRound}>Draw:{count_draw} </Text>
      <Text style={myStyles.TextRound}>AI select:{AI_map[rand_-1]} </Text>
      <Text style={myStyles.TextInput}>Please select!!</Text>
      {round<item.round?(
          
           <View>
              <View style={{flexDirection:"row"}}> 
          <TouchableOpacity
       
          onPress={() =>Result( 1) }
        >
          <Image
            source={require("../Image/Hammer.png")}
            style={myStyles.ImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Result(2)}
        >
          <Image
            source={require("../Image/Scissors.png")}
            style={myStyles.ImageStyle}
          />
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>  Result(3)}
        >
          <Image
            source={require("../Image/Paper.png")}
            style={myStyles.ImageStyle}
          />
        </TouchableOpacity>
        </View>

      ):
      
      ( navigation.navigate("Result", { data: item.data,pointai:count_ai,pointuse:count_player }))}

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
  TextInput: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  ImageStyle: {
    width: 150,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default IngameScreen;
