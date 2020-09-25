import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PosesImages from './PosesImages.js';
import NamesDictionary from '../assets/NamesDictionary.json';
import Constants from './Constants.js';
import GestureRecognizer from 'react-native-swipe-gestures';

const Sound = require('react-native-sound');
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log('w > ' + screenWidth + ' | h > ' + screenHeight);

const DisplayPose = ({navigation}) => {
  const [poseInfo, setPoseInfo] = useState(navigation.getParam('item'));
  const [poseIndex, setPoseIndex] = useState(navigation.getParam('index'));

  console.log(poseInfo.details.AsanaSanskrit);

  useEffect(() => {
    // Update the document title using the browser API
    console.log('use effect....');
  });

  const speakerImage = require('../assets/images/speaker.png');
  const tortiseImage = require('../assets/images/tortoise.png');
  const [normalPace, setNormalPace] = useState(
    new Sound(`${poseInfo.details.ImageAudName}.mp3`),
  );
  const [slowPace, setSlowPace] = useState(
    new Sound(`${poseInfo.details.ImageAudName}_slow.mp3`),
  );

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const onSwipeLeft = s => {
    console.log('--> going left..' + poseIndex);
    setPoseIndex(prevPoseIndex => prevPoseIndex + 1);
    setPoseInfo(NamesDictionary[poseIndex]);
    setNormalPace(new Sound(`${poseInfo.details.ImageAudName}.mp3`));
    setSlowPace(new Sound(`${poseInfo.details.ImageAudName}_slow.mp3`));
    console.log(' <-- going left..' + poseIndex);
  };

  const onSwipeRight = s => {
    console.log('--> going right..' + poseIndex);
    setPoseIndex(poseIndex + 1);
    setPoseInfo(NamesDictionary[poseIndex]);
    setNormalPace(new Sound(`${poseInfo.details.ImageAudName}.mp3`));
    setSlowPace(new Sound(`${poseInfo.details.ImageAudName}_slow.mp3`));
    console.log(' <-- going right..' + poseIndex);
  };

  const blah = () => {
    console.log(`poseIndes > ${poseIndex}`);
    let pose = NamesDictionary[poseIndex];
    return PosesImages[pose.details.ImageAudName].large;
  };

  return (
    <GestureRecognizer
      onSwipeLeft={state => onSwipeLeft('left')}
      onSwipeRight={state => onSwipeRight('right')}
      config={config}
      style={Constants.FLEX_ONE}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {poseInfo.details.AsanaSanskrit} || {poseIndex}
        </Text>
        <Image source={blah()} resizeMode="contain" style={styles.imageStyle} />
        <View style={styles.spakerView}>
          <TouchableOpacity onPress={() => playSound(normalPace)}>
            <Image source={speakerImage} key="speaker" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSound(slowPace)}>
            <Image source={tortiseImage} key="tortise" />
          </TouchableOpacity>
        </View>
      </View>
    </GestureRecognizer>
  );
};

const playSound = sound => {
  sound.play();
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
DisplayPose.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('item').key,
});
export default DisplayPose;