import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnswerType, GetMessagesType } from "../../../api/api-comments";
import { setMessages } from "./commentsReducerAction";

export interface CommentsType {
    id: number
    replyTo: number
    author: string
    message: string
    timestamp: number
}

interface InitialStateType {
    messages: CommentsType[]
    isLoading: boolean
    error: string
}

const initialState: InitialStateType = {
    messages: [],
    isLoading: false,
    error: ''
}

export const commentsReduser = createSlice({
    name: 'comments',
    initialState,
    reducers: {

    },
    extraReducers: {
        [setMessages.fulfilled.type]: (state, action: PayloadAction<GetMessagesType>) => {
            state.messages = action.payload.answer.messages
            state.isLoading = false
        },
        [setMessages.pending.type]: (state) => {
            state.isLoading = true
        },
        [setMessages.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})