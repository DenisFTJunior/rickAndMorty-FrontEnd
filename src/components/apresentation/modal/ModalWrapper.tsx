import { css } from '@emotion/css'
import React from 'react'

import { useModalDispatch, useModalSelector } from '../../../utils/redux/modal/hooks'
import { close } from '../../../utils/redux/modal/slice'
import Flex from '../../structure/Flex'
import ModalCloseButton from './ModalCloseButton'
import Modal from './ModalPanel'
import { WrapperProps } from './_schema/ModalWrapper'

const styleWrapper = css(`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,0.05);
    z-index: 1000;
`)

const ModalWrapper = ({ children, name, color, onClose, ...props }: WrapperProps) => {
    const dispatch = useModalDispatch()
    const isOpen = useModalSelector(state => state.open)
    const modal = useModalSelector(state => state.data.modal)
    if (isOpen && modal === name) return (
        <div className={styleWrapper} onClick={() => dispatch(close({ id: '', modal: name }))}>
            <Flex>
                <Modal {...props}>
                    <ModalCloseButton color={color} onClose={onClose} modal={name} />
                    <>{children}</>
                </Modal>
            </Flex>
        </div>
    )
    return <></>
}

export default ModalWrapper