import React, { Component, PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PosesImages from './PosesImages';

class ListItem extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log("ListItem render...");
    return (
      <View style={styles.viewStyle}>
        <Image
          source={PosesImages[this.props.poseInfo.details.ImageAudName].small}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{this.props.poseInfo.details.AsanaSanskrit}</Text>
      </View>
    );
  };
}

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
