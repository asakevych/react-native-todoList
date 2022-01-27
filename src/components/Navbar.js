import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: '#2d1e19',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
});
