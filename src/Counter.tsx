import React from 'react';
import {configureStore} from 'redux-starter-kit';
import withProvider from "./withProvider";
import counterReducer, {increment, decrement} from "./redux/counterSlice";

const store = configureStore({reducer: counterReducer});
const stateToProps = (state: number) => ({ counter: state });

type CounterProps = {
    counter: number
}
const Counter: React.FC<CounterProps> = ({counter}) => {
    return (
        <div>
            {counter}
            <button onClick={()=> {
                store.dispatch (increment({amount: 2}));
            }}>Increment</button>
            <button onClick={()=> store.dispatch (decrement())}>Decrement</button>
        </div>
    );
};

export default withProvider(store, stateToProps)(Counter);
