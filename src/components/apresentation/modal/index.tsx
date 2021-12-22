import ModalCloseButton from "./ModalCloseButton"
import ModalWrapper from "./ModalWrapper"

interface Props {
    children: JSX.Element[] | JSX.Element
    onClose?: Function
    color?: string
    width?: string
}

const Modal = ({ children, onClose, color, width }: Props) => {
    return (
        <ModalWrapper width={width}>
            <ModalCloseButton color={color} onClick={onClose} />
            <>{children}</>
        </ModalWrapper>)
}

export default Modal