import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatItem({ name, lastMessage, time }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/placeholder.png')} style={styles.avatar} />
      <View style={{flex:1}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.last}>{lastMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flexDirection:'row', padding:14, alignItems:'center'},
  avatar:{width:50, height:50, borderRadius:25, backgroundColor:'#ccc', marginRight:10},
  name:{fontWeight:'bold'},
  last:{color:'#666'},
  time:{color:'#666', marginLeft:10}
});