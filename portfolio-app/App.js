import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LanguageList from './langItems';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LanguageList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});

export default App;