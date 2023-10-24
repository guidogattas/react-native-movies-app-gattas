import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: null,
        idToken: null,
        uid: null,
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            AsyncStorage.setItem('userData', JSON.stringify(action.payload));
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload;
            AsyncStorage.setItem('userToken', JSON.stringify(action.payload));
        },
        setUid: (state, action) => {
            state.uid = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            state.idToken = null;
            AsyncStorage.removeItem('userData');
            AsyncStorage.removeItem('userToken');
        },
    },
});

export const { setIdToken, setUser, setUid, clearUser } = authSlice.actions;

export default authSlice.reducer;