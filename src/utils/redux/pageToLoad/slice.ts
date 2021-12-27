import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PageState {
    page: number,
}

const initialState: PageState = {
    page: 1,
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        goToInitialPage: (state) => {
            state.page = 1
        },
        goToPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },

    }
})

export const { goToInitialPage, goToPage } = pageSlice.actions

export default pageSlice.reducer