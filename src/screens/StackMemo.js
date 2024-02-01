import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';
import _isEmpty from 'lodash/isEmpty';

export default function StackMemo(props) {
  const { navigation } = props;
  const [textValue, onChangeText] = useState("");
  const [textList, setTextList] = useState([]);
  const [id, setID] = useState(1);

  return (
    <View style={styles.container}>
      <Text>StackMemo</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={textValue}
          onChangeText={(text) => onChangeText(text)}
        />
        <Button
          title="セット"
          onPress={() => {
            if (!textValue) return null;
            const newList = textList;
            newList.push(textValue);
            setTextList(newList);
            onChangeText("");
            setID(id + 1);
          }}
        />
      </View>
      <FlatList
        data={textList}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
        style={styles.flatListContainer}
      />
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
  textInputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: '50%',
    height: '10px',
    borderColor: '#000000',
    borderWidth: 1,
    marginEnd: 20,
    padding: 5
  },
  flatListContainer: {
    maxHeight: 200,
    width: '100%',
    borderColor: '#000000',
    borderWidth: 1,
    margin: 10
  }
});
