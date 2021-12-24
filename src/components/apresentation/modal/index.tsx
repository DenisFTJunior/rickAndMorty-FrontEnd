import React from 'react'
import { Provider } from "react-redux"

import ModalCloseButton from "./ModalCloseButton"
import ModalWrapper from "./ModalWrapper"
import modalStore from '../../../utils/redux/modal/store'


interface Props {
    children: JSX.Element[] | JSX.Element
    onClose?: Function
    color?: string
    width?: string
    name: string
    margin?: string
}

const Modal = ({ children, ...props }: Props) => {
    return (
        <Provider store={modalStore}>
            <ModalWrapper {...props}>
                <>{children}</>
            </ModalWrapper>
        </Provider>
    )
}

export default Modal