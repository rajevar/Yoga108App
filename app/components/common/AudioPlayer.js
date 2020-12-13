const Sound = require('react-native-sound');

function AudioPlayer(fileName) {

  console.log("fileNAme is " + fileName);
  let s = new Sound(fileName, Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('error', e);
    } else {
      console.log(" ---> play");
      s.play(() => {
        console.log(" <--- release");
        s.release()
      })
    }
  });

}

export default AudioPlayer;