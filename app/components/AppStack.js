import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import NamesList from './NamesList';
import DisplayPose from './DisplayPose';

export const Stack = createStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={NamesList} />
            <Stack.Screen name="DisplayPose" component={DisplayPose} />
        </Stack.Navigator>
    );
}
export default AppStack;