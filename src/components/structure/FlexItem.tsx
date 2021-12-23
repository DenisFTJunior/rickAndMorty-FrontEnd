import { css } from "@emotion/css";
import React from 'react'

interface Props extends StyleProps {
    children: JSX.Element[] | JSX.Element
}

interface StyleProps {
    shrink?: string
    width?: string
    height?: string
    align?: string
    margin?: string
    flex?: number
    grow?: number
    order?: number
}


const generateStyle = ({ flex, align, order, grow, shrink, width, height, margin }: Props) => css(`
    flex: ${flex || 1};
    align-self: ${align || 'center'};
    order: ${order || 0};
    flex-grow: ${grow || 1};
    flex-grow: ${shrink};
    width: ${width || '100%'};
    height: ${height || '100%'};
    margin: ${margin || `0`};
`)

const FlexItem = (props: Props) => {
    const style = generateStyle(props)
    return < div className={style} >{props.children}</div>
}

export default FlexItem