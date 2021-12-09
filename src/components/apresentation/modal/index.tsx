import ModalCloseButton from "./ModalCloseButton"
import ModalPanel from "./ModalPanel"
import ModalWrapper from "./ModalWrapper"

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Modal = ({ children }: Props) => {
    return (
        <ModalWrapper>
            <ModalPanel>
                <ModalCloseButton />
                <>{children}</>
            </ModalPanel>
        </ModalWrapper>)
}

export default Modal