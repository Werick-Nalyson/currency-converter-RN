import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import api from '../services/api';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedaA: this.props.moedaA,
      moedaB: this.props.moedaB,
      moedaB_value: 0,
      convertedValue: 0,
    };

    this.converter = this.converter.bind(this);
  }

  async converter() {
    const currencies = this.state.moedaA + '_' + this.state.moedaB;
    const response = await api.get(
      `convert?q=${currencies}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`,
    );
    let price = response.data[currencies];
    let convertion = price * Number(this.state.moedaB_value);

    this.setState({
      convertedValue: convertion.toFixed(2),
    });

    Keyboard.dismiss();
  }

  render() {
    const {moedaA, moedaB} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.converterTitle}>
          {moedaA} para {moedaB}
        </Text>

        <TextInput
          placeholder="Valor a ser convertido"
          style={styles.converterValue}
          onChangeText={moedaB_value => this.setState({moedaB_value})}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.converterButton}
          onPress={this.converter}>
          <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.convetedValue}>
          {this.state.convertedValue === 0
            ? ''
            : 'R$ ' + this.state.convertedValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  converterTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  converterValue: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  converterButton: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  convetedValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
});

export default Converter;
