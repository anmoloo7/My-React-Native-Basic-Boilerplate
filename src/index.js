import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
import Screens from './screens';
import { Provider, useSelector } from 'react-redux';
import store, { persistor } from './store';
import Components from './components'

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Components.Loader />} persistor={persistor}>
                <Navigator />
            </PersistGate>
        </Provider>
    );
}

function Navigator() {
    const authState = useSelector((store) => store.authState);
    const isAuthenticated = authState.user !== undefined;

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <RootStack.Screen name={'MainStack'} component={!isAuthenticated ? AuthNavigator : MainNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

function AuthNavigator() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name="Login" component={Screens.Login} />
        </AuthStack.Navigator>
    );
}

function MainNavigator() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <MainStack.Screen name="Home" component={Screens.Home} />
        </MainStack.Navigator>
    );
}

