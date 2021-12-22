import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { ModalDispatch, ModalState } from "../store"

export const useModalDispatch = () => useDispatch<ModalDispatch>()
export const useModalSelector: TypedUseSelectorHook<ModalState> = useSelector