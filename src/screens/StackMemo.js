import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView } from 'react-native';

export default function StackMemo(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>StackMemo</Text>

      <TextInput style={styles.input}/>
      <Button
        title='Homeに遷移する'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 10,
    borderColor: '#666666'
  }
});
