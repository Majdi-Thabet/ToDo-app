import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 50,
        backgroundColor: 'coral'

    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

    }

})
