import { css } from "@emotion/css"
import { BsX } from 'react-icons/bs'

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

const ModalCloseButton = ({ onClick, color }: CloseButtonProps) => {

    return (
        <div className={style}>
            <Button bgColor='#ffffff80' onClick={() => onClick ? onClick() : {}}>
                <BsX size="2rem" color={color || '#fff'} />
            </Button>
        </div>
    )
}

export default ModalCloseButton