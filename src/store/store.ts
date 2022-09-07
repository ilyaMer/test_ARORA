import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./reducers/authReducer/authReducer";
import { commentsReduser } from "./reducers/commentsReducer/commentsReducer";
import { usersReduser } from "./reducers/userReduser/usersReducer";

const rootReducer = combineReducers({
    auth: authReduser.reducer,
    comments: commentsReduser.reducer,
    users: usersReduser.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,        
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']

export const store = setupStore()