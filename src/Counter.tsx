import React from 'react';
import {configureStore, createSlice} from 'redux-starter-kit';
import {connect, Provider} from 'react-redux';
import withProvider from "./withProvider";

const counterSlice = createSlice ({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => state + action.payload.amount,
        decrement: state => state - 1
    }
});
const store = configureStore({reducer: counterSlice.reducer});
const stateToProps = (state: Number) => {
    return {
        counter: state
    }
};

type CounterProps = {
    counter: Number
}
const Counter: React.FC<CounterProps> = ({counter}) => {
    return (
        <div>
            {counter}
            <button onClick={()=> {
                store.dispatch (counterSlice.actions.increment({amount: 2}));
                console.log(counterSlice.actions.increment);
            }}>Increment</button>
            <button onClick={()=> store.dispatch (counterSlice.actions.decrement())}>Decrement</button>
        </div>
    );
};

export default withProvider(store, stateToProps)(Counter);
