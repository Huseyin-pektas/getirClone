/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { BannerCarusel,MainCategory,HeaderMain} from './src/components';
function App() {


  return (
    <SafeAreaView >
      <HeaderMain />
    <BannerCarusel/>
    <MainCategory/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
