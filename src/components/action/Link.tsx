import { css } from "@emotion/css"
import React, { MouseEvent } from "react"

interface Props {
    onClick: Function,
    children: JSX.Element[] | JSX.Element
    [propName: string]: any,
}
interface StyleProps {
    [propName: string]: any,
}

const generateStyle = ({ underline, color, disabled, hoverColor, hoverOpacity }: StyleProps) => css`
    display: inline;
    text-decoration: ${underline ? 'underline' : 'none'};
	color: ${color} !important;

    &:hover {
      ${hoverOpacity ? `opacity: ${hoverOpacity};` : ''}

      ${hoverColor ? `color : ${hoverColor};` : ''}
    }

    ${disabled ? 'cursor: not-allowed;' : ''}
    ${disabled ? 'opacity: .3;' : ''}
`

const Link = ({ onClick, children, ...props }: Props) => {
    const style = generateStyle(props)
    return <a className={style} onClick={(e: MouseEvent) => onClick(e)}{...props}>{children}</a>
}

export default Link