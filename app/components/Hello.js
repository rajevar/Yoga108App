import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
var Sound = require('react-native-sound');

const Hello = () => {
  let s = new Sound('a.mp3');
  return (
    <View>
      <TouchableOpacity onPress={() => playSound(s)}>
        <Text>Hello there..play audio</Text>
      </TouchableOpacity>
    </View>
  );
};

const playSound = sound => {
  console.log('play mp3...' + sound);
  sound.play();
};

export default Hello;
