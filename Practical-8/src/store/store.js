import { createStore } from 'redux';

const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    file: '',
    // isLoggedIn: ''
};

const reducer = (state = initialState, action) => {
    if(action.type === "SAVEDATA") {
        console.log("From store: ",state);
        return {
            ...state,
            ...action.payload
        }
    }
    if(action.type === "RESETDATA") {
        return {
            ...state,
            ...initialState
        }
    }
    return state;

}

const store = createStore(reducer);


export default store;