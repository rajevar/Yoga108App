const Sound = require('react-native-sound');

var sound;
function AudioPlayer(fileName) {
  console.log("fileNAme is " + fileName);
  sound = new Sound(fileName, Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('error', e);
    } else {
      console.log(" ---> play");
      sound.play(() => {
        console.log(" <--- release");
        sound.release()
      })
    }
  });
}

export function release() {
  if (sound) {
    sound.release();
  }
}

export default AudioPlayer;