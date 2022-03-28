import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen';
import SelectScreen from './src/Screens/SelectScreen';
import IngameScreen from './src/Screens/IngameScreen';
import CompileScreen from './src/Screens/CompileScreen';
import ResultScreen from './src/Screens/ResultScreen';

// export default function App() {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <HomeScreen />
//         {/* <SelectScreen />
//         <IngameScreen />
//         <CompileScreen />
//         <ResultScreen /> */}
//       </View>
//     </ScrollView>

//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Ingame" component={IngameScreen} />
        <Stack.Screen name="Compile" component={CompileScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C2C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
