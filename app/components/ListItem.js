import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PosesImages from './PosesImages';

const ListItem = ({poseInfo}) => {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={PosesImages[poseInfo.details.ImageAudName].small}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>{poseInfo.details.AsanaSanskrit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 80,
    width: 100,
  },
  textStyle: {
    fontSize: 15,
    color: 'blue',
    marginTop: 2,
    marginLeft: 5,
  },
});

export default ListItem;
