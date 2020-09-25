import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NamesDictionary from '../assets/NamesDictionary.json';
import ListItem from './ListItem.js';

const NamesList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={NamesDictionary}
        keyExtractor={result => result.key}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('DisplayPose', {item, index})}>
              <ListItem poseInfo={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  logo: {
    backgroundColor: 'pink',
    height: 100,
    width: 100,
    marginBottom: 2,
    resizeMode: 'contain',
  },
});

export default NamesList;
