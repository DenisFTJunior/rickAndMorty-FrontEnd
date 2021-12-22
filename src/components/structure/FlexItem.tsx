import { css } from "@emotion/css";
import React from 'react'

interface Props extends StyleProps {
    children: JSX.Element[] | JSX.Element
}

interface StyleProps {
    flex?: string
    wrap?: string
    shrink?: string
    width?: string
    align?: string
    grow?: number
    order?: number
}


const generateStyle = ({ flex, align, order, grow, shrink, width }: Props) => css(`
    flex: ${flex || 1};
    align-self: ${align || 'center'};
    order: ${order || 0};
    flex-grow: ${grow || 1};
    flex-grow: ${shrink};
    width: ${width || '100%'};
`)

const FlexItem = (props: Props) => {
    const style = generateStyle(props)
    return < div className={style} >{props.children}</div>
}

export default FlexItem