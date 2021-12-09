import { css } from "@emotion/css"
import React, { MouseEvent } from "react"

interface Props extends StyleProps {
    onClick: Function,
    children?: JSX.Element[] | JSX.Element,
    disabled?: boolean
}

interface StyleProps {
    disabled?: boolean,
    underline?: boolean,
    hoverColor?: string,
    color?: string,
    bgColor: string,
    display?: string,
    hoverOpacity?: string | number,
}

const generateStyle = ({ underline, color, bgColor, disabled, hoverColor, hoverOpacity, display }: StyleProps) => css`
    display: ${display ? display : 'inline-block'};
    text-decoration: ${underline ? 'underline' : 'none'};
	color: ${disabled ? `#ffffff` : color} !important;
    background: ${disabled ? `#999999` : bgColor} !important;

    &:hover {
      ${hoverOpacity ? `opacity: ${hoverOpacity};` : ''}
      ${hoverColor ? `color : ${hoverColor};` : ''}
    }

    ${disabled ? 'cursor: not-allowed;' : ''}
    ${disabled ? 'opacity: .3;' : ''}
`

const Button = ({ onClick, children, disabled, ...props }: Props) => {
    const handleClick = disabled ? () => { } : (e: MouseEvent) => onClick(e)
    const style = generateStyle({ disabled, ...props })
    return <button className={style} onClick={handleClick}{...props}>{children}</button>
}

export default Button