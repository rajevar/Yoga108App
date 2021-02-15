import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PosesImages from './PosesImages.js';
import NamesDictionary from '../assets/NamesDictionary.json';
import Constants from './Constants.js';
import GestureRecognizer from 'react-native-swipe-gestures';
import Play, { release } from './common/AudioPlayer.js';
import { speakerImages } from './Constants.js';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log('w > ' + screenWidth + ' | h > ' + screenHeight);

const DisplayPose = ({ route, navigation }) => {
  const speaker = speakerImages().speaker;
  const tortoise = speakerImages().tortoise;

  const [poseInfo, setPoseInfo] = useState(route.params.item);
  const [poseIndex, setPoseIndex] = useState(route.params.index);

  useEffect(() => {
    console.log("useEffect DisplayPose " + poseInfo.details.AsanaSanskrit);
    let pose = NamesDictionary[poseIndex];
    setPoseInfo(pose);
    return () => {
      release();
    }
  }, [poseIndex]);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const onSwipeLeft = () => {
    setPoseIndex(prevPoseIndex => prevPoseIndex + 1);
  };

  const onSwipeRight = () => {
    setPoseIndex(prevPoseIndex => prevPoseIndex - 1);
  };

  const imageSource = () => {
    let pose = NamesDictionary[poseIndex];
    return PosesImages[pose.details.ImageAudName].large;
  };

  const playSound = sound => {
    sound === 'nornal' ?
      Play(`${poseInfo.details.ImageAudName}.mp3`) :
      Play(`${poseInfo.details.ImageAudName}_slow.mp3`);
  };

  return (
    <GestureRecognizer
      onSwipeLeft={state => onSwipeLeft()}
      onSwipeRight={state => onSwipeRight()}
      config={config}
      style={Constants.FLEX_ONE}>
      <View style={styles.container}>
        <Text > {poseIndex}</Text>
        <Image source={imageSource()} resizeMode="contain" style={styles.imageStyle} />
        <View style={styles.spakerView}>
          <TouchableOpacity onPress={() => playSound('nornal')}>
            <Image source={speaker} key="speaker" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSound('slow')}>
            <Image source={tortoise} key="tortise" />
          </TouchableOpacity>
        </View>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  spakerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 50,
  },
});

// setting page title.
DisplayPose.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('item').key,
});

export default DisplayPose;
