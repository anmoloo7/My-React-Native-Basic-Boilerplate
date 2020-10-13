import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function Loader() {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="green" />
        </View>);
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "white",
            opacity: 0.5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "absolute"
        }
    });