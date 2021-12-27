import { configureStore } from '@reduxjs/toolkit'

import pageReducer from './slice'


const store = configureStore({
    reducer: pageReducer
})

export default store

export type PageState = ReturnType<typeof store.getState>
export type PageDispatch = typeof store.dispatch
