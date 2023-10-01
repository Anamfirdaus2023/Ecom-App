import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import Registration from './components/Registration';
import Login from './components/Login';
import HomePage from './components/HomePage';
import SingleProduct from './components/SingleProduct';
import SignUp from './components/SignUp';
import TabNavigation from './components/TabNavigation';

const Stack = createStackNavigator();

export default function App() {
  const [showImage, setShowImage] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false); // Control whether to show the HomePage

  useEffect(() => {
    // Hide the splash screen after 5 seconds
    setTimeout(() => {
      // SplashScreen.hide();//not working

      // After 5 seconds, set showImage to false to close the image
      setShowImage(false);

      // Set showHomePage to true to display the HomePage
      setShowHomePage(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {/* Conditional rendering: Show image for 5 seconds */}
      <View style={styles.container}>
        {showImage && (
          <Image
            source={require('./assets/logo2.jpeg')} // Provide the correct path to your logo image
            style={styles.logo}
            resizeMode="cover"
          />
        )}
        {showHomePage && (
          // Render home page or other components after 5 seconds
          <SafeAreaView style={styles.safeAreaView}>
            <Stack.Navigator initialRouteName="HomePage">
              <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
              <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="SingleProduct" component={SingleProduct} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
            {/* Include the TabNavigation component */}
          </SafeAreaView>
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
