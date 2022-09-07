import { CommentsType } from "../store/reducers/commentsReducer/commentsReducer"
import { instance } from "./Api"


export interface AnswerType {
    messages: CommentsType[]
}

export interface GetMessagesType {
    answer: AnswerType
    error: {
        conde: number
    }
}

export const commentsApi = {
    getComments() {
        return instance.get<GetMessagesType>('messages').then((res) => res.data)
    }
}