import { css } from "@emotion/css";
import React from 'react'

const boxShadow = [
    "0px 0px 9px 1px rgba(0,0,0,0.37);",
    '0px 0px 9px 4px rgba(0,0,0,0.57);',
    '0px 0px 11px 6px rgba(0,0,0,0.77)'
]

interface Props extends StyleProps {
    children: JSX.Element[] | JSX.Element
    onClick?: Function
}

interface StyleProps {
    density?: number,
    border?: string,
    width?: string,
    bgColor?: string
    margin?: string
}

const generateStyle = ({ density = 0, border, width, bgColor, margin }: StyleProps) => css(`
    width: ${width || '32rem'};
    box-shadow: ${boxShadow[density]};
    background-color: ${bgColor || '#fff'};
    border: ${border ? border : ''};
    margin:${margin || "1rem"};
`)

const Panel = ({ children, onClick, ...props }: Props) => {
    const style = generateStyle(props)
    return <div className={style} onClick={() => onClick ? onClick() : {}}>{children}</div>
}

export default Panel

