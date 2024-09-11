import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="LogIn" component={LogInScreen} />
            <Drawer.Screen name="SignUp" component={SignUpScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
