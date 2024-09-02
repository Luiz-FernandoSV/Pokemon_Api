import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

function Navbar(){
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.menuButton}>
            <Entypo name="menu" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>POKEMON API</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        backgroundColor: '#FA4B49',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    menuButton: {
        padding: 5,
    },
});

export default Navbar;