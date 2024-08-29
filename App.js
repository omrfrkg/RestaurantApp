import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Import Screens
import SearchScreen from './screens/SearchScreen';
import ResultShowScreen from './screens/ResultShowScreen';


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen"
                      component={SearchScreen} 
                      options={{
                        title : "Yemek Sepetim"
                        }}  />
        <Stack.Screen name="ResultShowhScreen"
                      component={ResultShowScreen} 
                      options={{
                        title : "Mağaza Detay"
                        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
