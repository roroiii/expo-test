import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabsScreen from "./src/screens/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your apps!</Text>
        <StatusBar style="auto" />
      </View> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTabsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
