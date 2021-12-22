import { css } from '@emotion/css'
import React from 'react'

import { useModalDispatch } from '../../../utils/redux/modal/hooks'
import { close } from '../../../utils/redux/modal/slice'
import Flex from '../../structure/Flex'
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

const ModalWrapper = ({ children, ...props }: WrapperProps) => {
    const dispatch = useModalDispatch()
    return (
        <div className={styleWrapper} onClick={() => dispatch(close())}>
            <Flex>
                <Modal {...props}>
                    {children}
                </Modal>
            </Flex>
        </div>
    )
}

export default ModalWrapper