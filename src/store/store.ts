import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./reducers/authReducer/authReducer";

const rootReducer = combineReducers({
    auth: authReduser.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
