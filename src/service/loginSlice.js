import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name : 'login',
    initialState: {
        token: '',
        error: '',
        remember: false
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload
            state.remember = action.payload
        },
        addError: (state, action) => {
            state.error = action.payload
        },
        isRemember: (state, action) => {
            state.remember = action.payload
        },
        removeToken: state => {
            state.token = ''
            state.remember = false
        },
        removeError: state => {
            state.error = ''
        }
    }
})

export const { addToken,addError,removeToken,removeError,isRemember } = loginSlice.actions

export default loginSlice.reducer