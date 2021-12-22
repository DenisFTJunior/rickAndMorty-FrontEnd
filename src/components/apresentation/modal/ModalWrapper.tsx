import { css } from '@emotion/css'
import React from 'react'

import Flex from '../../structure/Flex'
import Modal from './ModalPanel'
import { WrapperProps } from './_schema/ModalWrapper'

const styleWrapper = css(`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:#000070;
    z-index: 1000;
`)

const ModalWrapper = ({ children, ...props }: WrapperProps) => {
    return (
        <div className={styleWrapper}>
            <Flex>
                <Modal {...props}>
                    {children}
                </Modal>
            </Flex>
        </div>
    )
}

export default ModalWrapper