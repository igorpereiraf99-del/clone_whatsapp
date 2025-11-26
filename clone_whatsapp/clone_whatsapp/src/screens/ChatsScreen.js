import React, {useState} from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import ChatItem from '../components/ChatItem';

const initialChats = [
  { id: '1', name: 'João', lastMessage: 'Eai, blz?', time: '09:12' },
  { id: '2', name: 'Maria', lastMessage: 'Vou chegar tarde', time: '08:30' },
  { id: '3', name: 'Time Dev', lastMessage: 'Push feito!', time: 'Ontem' },
];

export default function ChatsScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={initialChats}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { id: item.id, name: item.name })}>
            <ChatItem {...item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}