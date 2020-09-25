import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NamesList from './app/components/NamesList';
import DisplayPose from './app/components/DisplayPose';
import Hello from './app/components/Hello';

// Navigation routes
const navigator = createStackNavigator(
  {
    NamesList: NamesList,
    DisplayPose: DisplayPose,
    Hello: Hello,
  },
  {
    initialRouteName: 'NamesList',
    defaultNavigationOptions: {
      title: 'Poses',
    },
  },
);

export default createAppContainer(navigator);
