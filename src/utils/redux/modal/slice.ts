import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalData {
    modal: string,
    id: string
}

interface ModalState {
    open: boolean,
    data: ModalData
}

const initialState: ModalState = {
    open: false,
    data: { id: '', modal: '' }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state, action: PayloadAction<ModalData>) => {
            state.open = true
            state.data = action.payload
        },
        close: (state, action: PayloadAction<ModalData>) => {
            state.open = false
            state.data = action.payload
        }
    }
})

export const { open, close } = modalSlice.actions

export default modalSlice.reducer