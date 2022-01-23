import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState()
  const [message, setMessage] = useState('Guess a number between 1-100')
  let [numberOfGuesses, setNumberOfGuesses] = useState(0)

  const checking = () => {
    if (guess == number) {
      setNumberOfGuesses(numberOfGuesses = numberOfGuesses + 1)
      Alert.alert('You guessed the number in ' + numberOfGuesses + ' guesses')
    } else if (guess < number) {
      setNumberOfGuesses(numberOfGuesses = numberOfGuesses + 1)
      setMessage('You guess ' + guess + ' is too low')
    } else if (guess > number) {
      setNumberOfGuesses(numberOfGuesses = numberOfGuesses + 1)
      setMessage('You guess ' + guess + ' is too high')
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        {message}
      </Text>
      <View>
        <TextInput keyboardType={"number-pad"} style={styles.input} onChangeText={guess => setGuess(guess)} value={guess}/>
      </View>
      <View style={styles.button}>
        <Button onPress={checking} title="Guess" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 75, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 20
  },
  button: {
    flexDirection: 'row'
  }
});
