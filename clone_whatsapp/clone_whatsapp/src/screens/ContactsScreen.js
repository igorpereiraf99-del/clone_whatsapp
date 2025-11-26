import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const contacts = [
  { id: '1', name: 'João' },
  { id: '2', name: 'Maria' },
  { id: '3', name: 'Carlos' },
];

export default function ContactsScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { id: item.id, name: item.name })}>
            <View style={{padding:16}}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}