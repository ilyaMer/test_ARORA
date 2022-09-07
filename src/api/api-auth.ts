import { instance } from "./Api"


interface AuthType {
    answer: {
        me: {
            id: string
        }
    }
    error: {
        conde: number
    }
}

export const authApi = {
    auth() {
        return instance.get<AuthType>('me').then((res) => res.data)
    }
}