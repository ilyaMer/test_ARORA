import { instance } from "./Api"

interface UsersType {
    id: string
    name: string
    surname: string
}

interface AnswerType {
    users: UsersType[]
}

export interface GetUsersType {
    answer: AnswerType
    error: {
        conde: number
    }
}

export const userApi = {
    getUsers() {
        return instance.get<GetUsersType>('users').then((res) => res.data)
    }
}