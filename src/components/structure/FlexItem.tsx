import { css } from "@emotion/css";
import React from 'react'

interface Props {
    [propName: string]: any,
    children: JSX.Element[] | JSX.Element
}

const generateStyle = ({ flex, align, order, grow, shrink }: Props) => css(`
    flex: ${flex || 1};
    align-self: ${align || 'center'};
    order: ${order || 0};
    flex-grow: ${grow || 1};
    flex-grow: ${shrink};
`)

const FlexItem = (props: Props) => {
    const style = generateStyle(props)
    return < div className={style} >{props.children}</div>
}

export default FlexItem