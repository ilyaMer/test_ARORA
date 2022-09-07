import { createAsyncThunk } from "@reduxjs/toolkit"
import { authApi } from "../../../api/api-auth"
import { commentsApi } from "../../../api/api-comments"
import { userApi } from "../../../api/api-user"

export const setMessages = createAsyncThunk(
    'messages/getMessages',
    async (_, thunkAPI) => {
        try {
            return commentsApi.getComments()
        } catch (error) {
            return thunkAPI.rejectWithValue("Нет соединения")
        }
    }
)