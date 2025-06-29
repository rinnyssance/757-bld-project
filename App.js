import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import GPTChatScreen from './screens/GPTChatScreen';
import StatsScreen from './screens/StatsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Challenge">
          {(props) => <ChallengeScreen {...props} darkMode={darkMode} />}
        </Stack.Screen>
        <Stack.Screen name="GPTChat">
          {(props) => <GPTChatScreen {...props} darkMode={darkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Stats">
          {(props) => <StatsScreen {...props} darkMode={darkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <ProfileScreen {...props} darkMode={darkMode} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style={darkMode ? "light" : "dark"} />
    </NavigationContainer>
  );
}
