import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Converter from './components/Converter';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Converter moedaA="USD" moedaB="BRL" />
        <Converter moedaA="EUR" moedaB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
