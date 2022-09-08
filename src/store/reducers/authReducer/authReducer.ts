import { createSlice } from "@reduxjs/toolkit";
import { setAuth } from "./authReducerAction";

export interface AuthType {
    id: string
    isLoading: boolean,
    error: string
}

const initialState: AuthType = {
    id: '',
    isLoading: false,
    error: ''
}

export const authReduser = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        [setAuth.fulfilled.type]: (state, action) => {
            state.isLoading = false
            console.log(action.payload.answer.me.id)
            state.id = action.payload.answer.me.id
        },
        [setAuth.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [setAuth.rejected.type]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload
        }
    }
})