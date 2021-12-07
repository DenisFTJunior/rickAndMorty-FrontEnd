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
    element: string
}

const generateStyle = ({ color, size }: Props) => css(`
    color: ${color ? color : '#222222'}
    size:${size ? textSize[size] : textSize['sm']}
`)

const Text = (props: Props) => {
    const style = generateStyle(props)
    switch (props.element) {
        case 'h1': return <h1 className={style} />
        case 'h2': return <h2 className={style} />
        case 'h3': return <h3 className={style} />
        case 'h4': return <h4 className={style} />
        case 'h5': return <h5 className={style} />
        case 'h6': return <h6 className={style} />
        case 'p': return <p className={style} />
        case 'span': return <span className={style} />
        default: return <h3 className={style} />
    }
}

interface WrapperProps extends Props {
    bold: boolean,
    italic: boolean,
    [propName: string]: any
}

const WrapperText = ({ bold, italic, ...props }: WrapperProps) => {
    if (bold) return <b><Text {...props} /></b>
    if (italic) return <i><Text {...props} /></i>
    return <Text {...props} />
}

export default WrapperText
