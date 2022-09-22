import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { AddSkill } from '../screens/AddSkill';
import { Signin } from '../screens/Signin';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Screen
                name="AddSkill"
                component={AddSkill}
                options={{ headerShown: false }}
            />
            <Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}