import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApi } from "../../../api/api-user"

export const setAuth = createAsyncThunk(
    'auth/isAuth',
    async (_, thunkAPI) => {
        try {
            let a = userApi.getUsers()
            a.then(res => console.log(res))
        } catch (error) {
            return thunkAPI.rejectWithValue("Нет соединения")
        }
    }
)