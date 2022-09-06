import { createSlice } from "@reduxjs/toolkit";
import { setAuth } from "./authReducerAction";

export interface AuthType {
    id: string
    isLoading: boolean
}

const initialState: AuthType = {
    id: '',
    isLoading: false
}

export const authReduser = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        [setAuth.fulfilled.type]: (state, action) => {
            // if (action.payload.password === state.password && action.payload.login === state.login) {
            //     state.isAuth = true;
            //     state.errorInput = ''
            // } else state.errorInput = "Неверный логин или пароль"

            // state.isLoading = false;
        },
        [setAuth.pending.type]: (state, action) => {
            // state.isLoading = true;
        },
        [setAuth.rejected.type]: (state, action) => {
            // state.isLoading = true;
            // state.error = action.payload
        }
    }
})