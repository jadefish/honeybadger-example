import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Honeybadger from '@honeybadger-io/react-native';

export default function App() {
  Honeybadger.configure('hbp_xyz');
  nonexistentFunction_outside(); // no backtrace

  function onClick() {
    nonexistentFunction_callback(); // backtrace unless source maps were uploaded
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={onClick} title="Click" />
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
});
