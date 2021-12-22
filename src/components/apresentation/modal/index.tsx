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
}

const Modal = ({ children, onClose, color, width }: Props) => {
    return (
        <Provider store={modalStore}>
            <ModalWrapper width={width}>
                <ModalCloseButton color={color} onClose={onClose} />
                <>{children}</>
            </ModalWrapper>
        </Provider>
    )
}

export default Modal