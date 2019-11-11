import {createSlice, PayloadAction} from "redux-starter-kit";

const initialState: number = 0;
const counterSlice = createSlice ({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state, action: PayloadAction<{amount: number}>) => state + action.payload.amount,
        decrement: state => state - 1
    }
});

export default counterSlice.reducer;
console.log(counterSlice.actions);
export const {increment, decrement} = counterSlice.actions;
