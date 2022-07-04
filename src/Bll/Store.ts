import {LoginReducer} from "./Login-Reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";

let Rootreducer = combineReducers({
    LoginPage: LoginReducer,

})

export type RootStoreType = ReturnType<typeof Rootreducer>

let store = createStore(Rootreducer)

export default store