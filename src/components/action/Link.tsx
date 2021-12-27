import { css } from "@emotion/css"
import React, { MouseEvent } from "react"

interface Props {
    onClick?: Function,
    children: JSX.Element[] | JSX.Element
    href?: string
    [propName: string]: any,
}
interface StyleProps {
    [propName: string]: any,
}

const generateStyle = ({ underline, color, disabled, hoverColor, hoverOpacity }: StyleProps) => css`
    display: inline;
    text-decoration: ${underline ? 'underline' : 'none'};
	color: ${color} !important;
    cursor:pointer;

    &:hover {
      ${hoverOpacity ? `opacity: ${hoverOpacity};` : ''}

      ${hoverColor ? `color : ${hoverColor};` : ''}
    }

    ${disabled ? 'cursor: not-allowed;' : ''}
    ${disabled ? 'opacity: .3;' : ''}
`

const Link = ({ onClick, children, href, disabled, ...props }: Props) => {
    const style = generateStyle({ disabled, ...props })

    const handleClick = (e: MouseEvent) => {
        if (!href && !disabled) {
            e.preventDefault()
            if (onClick) onClick(e)
        }
    }

    return <a className={style} href={href} onClick={handleClick}{...props}>{children}</a>
}

export default Link