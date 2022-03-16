import { createStore } from 'redux';

const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profileImage: ''
};

const reducer = (state = initialState, action) => {
    if(action.type === "storeData") {
        return {
            ...state,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone,
            password: action.payload.password,
            confirmPassword: action.payload.confirmPassword,
            // name: action.payload.name,


        }
    }

}

const store = createStore(reducer);


export default store;