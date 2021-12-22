import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
    value: boolean
}

const initialState: ModalState = {
    value: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = true
        },
        close: state => {
            state.value = false
        }
    }
})

export const { open, close } = modalSlice.actions

export default modalSlice.reducer