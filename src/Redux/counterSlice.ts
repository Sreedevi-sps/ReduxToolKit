import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface countState {
  value: number;
}

const initialState: countState = {
  value: 0,
};

let countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
  },
});

export const {increment, decrement, incrementByValue} = countSlice.actions;
export default countSlice.reducer;
