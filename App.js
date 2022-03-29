import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Color from "./src/Context/Color";
import HomeScreen from './src/Screens/HomeScreen';
import SelectScreen from './src/Screens/SelectScreen';
import IngameScreen from './src/Screens/IngameScreen';
import CompileScreen from './src/Screens/CompileScreen';
import ResultScreen from './src/Screens/ResultScreen';


const defaultStackNavOption = {
  headerStyle: { backgroundColor: Color.five },



}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultStackNavOption}>
        <Stack.Screen name="Home"  options={{headerLeft: () => <></>,}} component={HomeScreen} />
        <Stack.Screen name="Select" options={{headerLeft: () => <></>,}} component={SelectScreen} />
        <Stack.Screen name="Ingame" options={{headerLeft: () => <></>,}} component={IngameScreen} />
        <Stack.Screen name="Compile" options={{headerLeft: () => <></>,}} component={CompileScreen} />
        <Stack.Screen name="Result" options={{headerLeft: () => <></>,}}component={ResultScreen} />
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
