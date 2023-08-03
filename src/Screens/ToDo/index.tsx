// App.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  TodoState,
  Todo,
} from '../../Redux/todosSlice';

const TodoItem = ({id, text, completed}: Todo) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 28,
        marginTop: 50,
      }}>
      <Text style={{textDecorationLine: completed ? 'line-through' : 'none'}}>
        {text}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="Toggle" onPress={handleToggle} />
        <Button title="Delete" onPress={handleDelete} />
      </View>
    </View>
  );
};

const TodoScreen = () => {
  const [newTodo, setNewTodo] = useState('');

  const todos = useSelector((state: TodoState) => state.todos.todos);
  console.log("🚀 ~ file: index.tsx:51 ~ TodoScreen ~ todos:", todos)
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <View style={{padding: 20, marginTop: 40}}>
      <TextInput
        placeholder="Enter a new todo..."
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
        onSubmitEditing={handleAddTodo}
      />
      <FlatList
        data={todos}
        renderItem={({item}) => <TodoItem {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoScreen;
