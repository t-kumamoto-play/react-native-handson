import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function DetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <Button
        title='Homeに遷移する'
        onPress={() => {
          navigation.navigate('Home');
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
