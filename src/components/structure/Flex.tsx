import { css } from "@emotion/css";
import React from 'react'

interface Props extends StyleProps {
    children: JSX.Element[] | JSX.Element
}

interface StyleProps {
    direction?: string
    wrap?: string
    justify?: string
    align?: string
    alignContent?: string
    gap?: number
}

const generateStyle = ({ direction, wrap, justify, align, alignContent, gap }: StyleProps) => css(`
    display: flex;
    flex-direction: ${direction || 'row'};
    flex-wrap: ${wrap || 'nowrap'};
    justify-content: ${justify || 'center'};
    align-items: ${align || 'center'};
    align-content: ${alignContent || 'flex-start'};
    gap: ${gap || 0};
`)

const Flex = (props: Props) => {
    const style = generateStyle(props)
    return < div className={style} >{props.children}</div>
}

export default Flex