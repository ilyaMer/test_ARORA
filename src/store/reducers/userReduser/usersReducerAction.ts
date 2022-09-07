import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi } from "../../../api/api-user"

export const setUsers = createAsyncThunk(
    'users/setUsers',
    async (_, thunkAPI) => {
        try {
            return userApi.getUsers()
        } catch (error) {
            return thunkAPI.rejectWithValue("Нет соединения")
        }
    }
)