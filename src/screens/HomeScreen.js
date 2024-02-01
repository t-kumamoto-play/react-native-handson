import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title='Detailに遷移する'
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <Button
        title='StackMemoに遷移する'
        onPress={() => {
          navigation.navigate('StackMemo');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
