import React, { useEffect } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Router from './src/navigations/Router';

const App = () => {


  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default gestureHandlerRootHOC(App);
