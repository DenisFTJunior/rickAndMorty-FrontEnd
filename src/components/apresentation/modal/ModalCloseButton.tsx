import React from 'react'
import { css } from "@emotion/css"
import { BsX } from 'react-icons/bs'
import { useDispatch } from "react-redux"

import Button from '../../action/Button'
import { CloseButtonProps } from "./_schema/ModalCloseButton"

const style = css(`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    height: 2rem;
    width: 2rem;
    padding: 0.2rem;
`)

const ModalCloseButton = ({ onClose, color }: CloseButtonProps) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        if (onClose) onClose()
        dispatch(close())
    }

    return (
        <div className={style}>
            <Button bgColor='#ffffff80' onClick={handleClick}>
                <BsX size="2rem" color={color || '#fff'} />
            </Button>
        </div>
    )
}

export default ModalCloseButton