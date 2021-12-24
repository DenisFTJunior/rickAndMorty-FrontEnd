import { PanelProps } from "./ModalPanel";

export interface WrapperProps extends PanelProps {
    children: JSX.Element[] | JSX.Element
    onClose?: Function
    color?: string
    width?: string
    name: string
    margin?: string
}