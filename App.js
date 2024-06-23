import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Home from './pages/Home';
import Course from './pages/Course';
import Mentor from './pages/Mentor';
import Task from './pages/Task';
import Math from './pages/Tasks/Math';
import Reading from './pages/Tasks/Reading';
import Writing from './pages/Tasks/Writing';
import Vocabulary from './pages/Tasks/Vocabulary';
import { AuthProvider, useAuth } from './AuthProvider';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name="Course" component={Course}/>
      <Stack.Screen name="Mentor" component={Mentor}/>
      <Stack.Screen name="Task" component={Task}/>
      <Stack.Screen name="Math" component={Math}/>
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="Vocabu" component={Vocabulary}/>
        <Stack.Screen name="Writing" component={Writing}/>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
