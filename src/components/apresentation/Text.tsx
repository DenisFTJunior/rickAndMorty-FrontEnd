import { css } from "@emotion/css"
import React from 'react'

const textSize: any = {
    xsm: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xlg: '5rem'
}

interface Props {
    color?: string,
    size?: string,
    underline?: boolean,
    element?: string
    [propName: string]: any
}

const generateStyle = ({ color, size, underline }: Props) => css(`
    color: ${color ? color : '#222222'}
    size:${size ? textSize[size] : textSize['sm']}
    text-decoration: ${underline ? 'underline' : 'none'};
`)

const Text = (props: Props) => {
    const style = generateStyle(props)
    switch (props.element) {
        case 'h1': return <h1 className={style} >{props.children}</h1>
        case 'h2': return <h2 className={style} >{props.children}</h2>
        case 'h3': return <h3 className={style} >{props.children}</h3>
        case 'h4': return <h4 className={style} >{props.children}</h4>
        case 'h5': return <h5 className={style} >{props.children}</h5>
        case 'h6': return <h6 className={style} >{props.children}</h6>
        case 'p': return <p className={style} >{props.children}</p>
        case 'span': return <span className={style}>{props.children}</span>
        default: return <h3 className={style}>{props.children}</h3>
    }
}

interface WrapperProps extends Props {
    bold?: boolean,
    italic?: boolean,
}

const WrapperText = ({ bold, italic, children, ...props }: WrapperProps) => {
    if (bold) return <b><Text {...props} >{children}</Text></b>
    if (italic) return <i><Text {...props} >{children}</Text></i>
    return <Text {...props} >{children}</Text>
}

export default WrapperText
