import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ChatScreen({ route }) {
  const { name } = route.params;
  const [messages, setMessages] = useState([
    { id: '1', from: 'them', text: 'Oi!', time: '09:00' },
    { id: '2', from: 'me', text: 'Olá!', time: '09:01' }
  ]);
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), from: 'me', text }]);
    setText('');
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={[styles.bubble, item.from === 'me' ? styles.me : styles.them]}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Mensagem" />
        <Button title="Enviar" onPress={send} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bubble:{padding:10, margin:6, borderRadius:10, maxWidth:'75%'},
  me:{backgroundColor:'#dcf8c6', alignSelf:'flex-end'},
  them:{backgroundColor:'#fff', alignSelf:'flex-start'},
  inputRow:{flexDirection:'row', padding:10, borderTopWidth:1, borderColor:'#ddd'},
  input:{flex:1, borderWidth:1, borderColor:'#ddd', borderRadius:20, paddingHorizontal:10, marginRight:10}
});