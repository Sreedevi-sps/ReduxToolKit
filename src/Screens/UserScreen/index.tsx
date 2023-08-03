import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../../Redux/userSlice';
import {AppDispatch} from '../../Redux/store';
import styles from './styles';

const UserScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: any) => state.users.users);
  const status = useSelector((state: any) => state.users.status);
  const error = useSelector((state: any) => state.users.error);

  useEffect(() => {
    // Fetch users when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(
      createUser({
        name,
        email,
        id: 0,
      }),
    );
    setName('');
    setEmail('');
  };

  const handleUpdateUser = (user: any) => {
    const updatedUser = {...user, name, email};
    dispatch(updateUser(updatedUser));
    setName('');
    setEmail('');
  };

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  if (status === 'loading') {
    return (
      <View style={styles.noDataContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.noDataContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.userTitle}>User List</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputText}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Name"
        />
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
        />
        <Button title="Add User" onPress={handleAddUser} />
      </View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.renderBox}>
            <Text style={styles.name}>Name:{item.name}</Text>
            <Text style={styles.email}>Email:{item.email}</Text>
            <View style={styles.actionBox}>
              <Button title="Update" onPress={() => handleUpdateUser(item)} />
              <Button
                title="Delete"
                onPress={() => handleDeleteUser(item.id)}
              />
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default UserScreen;
