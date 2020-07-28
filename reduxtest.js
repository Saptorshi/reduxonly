const { createStore } =  require('redux');

const initialState = {
    age : 21
};

const myReducer = (state = initialState, action) => {
    // need to create a copy of the state, since can't mutate state
    const newState = {...state};

    if(action.type == 'ADD') {
        newState.age += action.val;
    }

    if(action.type == 'SUB') {
        newState.age -= action.val;
    }

    return newState;
}

const store = createStore(myReducer);

console.log('initial state : ' , store.getState());
store.dispatch({type : 'ADD', val : 5});
console.log('after ADD : ' , store.getState());
store.dispatch({type : 'ADD',  val : 10});
console.log('after ADD : ' , store.getState());
store.dispatch({type : 'SUB', val : 5});
console.log('after SUB : ' , store.getState());