import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        value: {}
    },
    reducers: {
        profile: ( state, action )=> {
            state.value = action.payload
        }
    }
})

export const {profile} = profileSlice.actions

export default profileSlice.reducer