import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetUsersType } from "../../../api/api-user";
import { setUsers } from "./usersReducerAction";

export interface UserType {
    id: string
    name: string
    surname: string
    image?: string
}

interface InitialStateType {
    users: UserType[]
    isLoading: boolean
    error: string
}

const initialState: InitialStateType = {
    users: [],
    isLoading: false,
    error: ''
}

export const usersReduser = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: {
        [setUsers.fulfilled.type]: (state, action: PayloadAction<GetUsersType>) => {
            state.users = action.payload.answer.users
            state.isLoading = false
        },
        [setUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [setUsers.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})