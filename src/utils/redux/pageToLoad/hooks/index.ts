import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { PageDispatch, PageState } from "../store"

export const usePageDispatch = () => useDispatch<PageDispatch>()
export const usePageSelector: TypedUseSelectorHook<PageState> = useSelector