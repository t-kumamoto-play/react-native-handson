import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView, Pressable, FlatList, Item } from 'react-native';
import _map from 'lodash/map';


export default function StackMemo(props) {
  const { navigation } = props;
  const [inputText, onChangeText] = useState("");
  const [textList, setTextList] = useState([]);
  const [id, setID] = useState(1);

  console.log({textList})

  return (
    <SafeAreaView style={styles.container}>
      <Text>StackMemo</Text>

      <View style={styles.input_container}>
        <TextInput
          style={{ padding: 5,  width: '50%', height: 30, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
          onChangeText={(text) => onChangeText(text)}
          value={inputText}
        />
        <Button
          style={{ margin: '10px' }}
          title="セット"
          onPress={(e) => {
            onChangeText("");
            setTextList((list) => {
              console.log({list});
              return [...list, { id: id, text: inputText}]
            });
            setID(id++);
          }}
        />
      </View>
      <FlatList
        style={{ maxHeight: 200, overflow: 'scroll' }}
        data={textList}
        renderItem={({item}) => <Item text={item.text}/>}
        keyExtractor={item => item.id}
      />
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
  input_container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});
