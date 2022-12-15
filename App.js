import React, { useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { AddTodo } from './src/components/AddTodo';
import { TodoList } from './src/components/TodoItem';

export default function App() {
    const [todos, setTodos] = useState([]);
    const saveTodoToUserDevice = async todos => {
        try {
            const stringifyTodos = JSON.stringify(todos);
            await AsyncStorage.setItem('todos', stringifyTodos);
        } catch (error) {
            console.log(error);
        }
    };

    const getTodosFromUserDevice = async () => {
        try {
            const todos = await AsyncStorage.getItem('todos');
            if (todos != null) {
                setTodos(JSON.parse(todos));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTodosFromUserDevice();
    }, []);

    useEffect(() => {
        saveTodoToUserDevice(todos);
    }, [todos]);

    const addTodo = title => {
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                {
                    id: Date.now().toString(),
                    title: title,
                    completed: false,
                },
            ];
        });
    };

    const toggleTodoComplete = todoId => {
        setTodos(todos.map(item => {
            if (item.id === todoId) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    const deleteTodoItem = todoId => {
        setTodos(todos.filter(item => item.id !== todoId));
    };

    return (
        <View>
            <Navbar title="Todo App"/>
            <AddTodo onSubmit={ addTodo }/>
            <TodoList
                toggleTodoComplete={ toggleTodoComplete }
                todos={ todos }
                onDelete={ deleteTodoItem }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        margin: 10,
    },
});
