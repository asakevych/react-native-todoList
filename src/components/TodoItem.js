import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CheckBox from "expo-checkbox";

export const TodoList = ({ markTodoComplete, todos, onDelete }) => {
    return (
        <View style={styles.listContainer}>
            {todos.map(todo => {
                let isItemCompleted = !!todo.completed;
                const onCompletedChange = () => {
                    markTodoComplete(todo.id)
                    isItemCompleted = !todo.completed
                }
                const handlerDelete = () => {
                    onDelete(todo.id)
                }
                return (
                <View
                    key={todo.id}
                    style={styles.listItemContainer}
                >
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={onCompletedChange}
                    >
                        <CheckBox
                            value={isItemCompleted}
                            onValueChange={onCompletedChange}
                            style={styles.checkbox}
                            color={isItemCompleted ? '#996655' : false}
                        />
                        <Text
                            style={styles.label}
                        >
                            {todo.title}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handlerDelete}
                    >
                        <Image
                            source={require('../images/close-icon.png')}
                            style={styles.deleteIcon}
                        />
                    </TouchableOpacity>
                </View>
            )})}
        </View>
    );
}


const styles = StyleSheet.create({
    listContainer: {
        margin: 10
    },
    listItemContainer: {
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#996655',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listItem: {
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 5
    },
    label: {
        fontSize: 25,
        color: '#2d1e19'
    },
    checkbox: {
        borderWidth: 2,
        borderColor: '#996655',
        padding: 15,
        marginRight: 10
    },
    deleteIcon: {
        height: 40,
        width: 40,
    }
})
