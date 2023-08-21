import SplashScreen from "./src/Screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import TestScreen from "./src/Screens/TestScreen";
import ConnectionScreen from "./src/Screens/ConnectionScreen";
import ResultScreen from "./src/Screens/ResultsScreen";
import DocterScreen from "./src/Screens/DocterScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import SelfBlog from "./src/Screens/SelfBlog";
import RunningBlogScreen from "./src/Screens/RunningBlog";
import TestHistoryScreen from "./src/Screens/TestHistoryScreen";
import BioMakersScreen from "./src/Screens/BioMakersScreen";
import TemplateSlider from "./src/Screens/templateSlider";

import GraphScreen from "./src/Screens/graphScreen";
import LogsScreen from "./src/Screens/logsScreen";
import SettingScreen from "./src/Screens/settingScreen";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Splash' component={SplashScreen} />
          <Stack.Screen name='graph' component={GraphScreen} />
          <Stack.Screen name='Logs' component={LogsScreen} />
          <Stack.Screen name='setting' component={SettingScreen} />
          <Stack.Screen name='TemplateSlider' component={TemplateSlider} />
          <Stack.Screen name='BioMakersScreen' component={BioMakersScreen} />
          <Stack.Screen
            name='TestHistoryScreen'
            component={TestHistoryScreen}
          />
          <Stack.Screen name='RunningBlog' component={RunningBlogScreen} />
          <Stack.Screen name='SelfBlog' component={SelfBlog} />
          {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
          {/* <Stack.Screen name='ConnectionScreen' component={ConnectionScreen} /> */}
          {/* <Stack.Screen name='Test' component={TestScreen} /> */}
          {/* <Stack.Screen name='ResultScreen' component={ResultScreen} /> */}
          {/* <Stack.Screen name='ProfileScreen' component={ProfileScreen} /> */}
          {/* <Stack.Screen name='DocterScreen' component={DocterScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
