import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  MainNavigator  from './src/navigation';
import Loginscreen from './src/components/Loginscreen'

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
