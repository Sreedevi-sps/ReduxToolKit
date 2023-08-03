import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {increment, decrement, incrementByValue} from '../../Redux/counterSlice';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.count.value);
  const [incrementValue, setIncrementValue] = useState(''); // State to store the entered increment value

  const incrementFunc = () => {
    dispatch(increment());
  };
  const decrementFunc = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    const parsedValue = parseInt(incrementValue, 10); // Convert the entered value to a number
    console.log("🚀 ~ file: index.tsx:21 ~ handleIncrement ~ parsedValue :", parsedValue )
    if (!isNaN(parsedValue)) {
      dispatch(incrementByValue(parsedValue));
      setIncrementValue(''); // Clear the input field after incrementing
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text> Current Number:{value} </Text>
      <TouchableOpacity style={styles.buttonView} onPress={incrementFunc}>
        <Text>Click here increment by 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView} onPress={decrementFunc}>
        <Text>Click here decrement by 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView} onPress={handleIncrement}>
        <Text>Click here increment by specific value</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
          }}
          placeholder="Enter increment value"
          value={incrementValue}
          onChangeText={setIncrementValue}
          keyboardType="numeric"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
