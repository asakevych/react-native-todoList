import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
        onSubmit(value);
        setValue('')
    }

    return (
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Type here todo title..."
                onChangeText={newValue => setValue(newValue)}
                value={value}
            ></TextInput>
            <Pressable
                style={styles.button}
                onPress={pressHandler}
            >
                <Text style={styles.buttonText}>ADD</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        height: 85,
        borderBottomWidth: 1,
        borderBottomColor: "#6b473b",
        paddingLeft: '5%'
    },
    input: {
        width: '80%',
        fontSize: 25,
        color: '#2d1e19'
    },
    button: {
        height: '100%',
        backgroundColor: "#6b473b",
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20
    }
})