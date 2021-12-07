import { css } from "@emotion/css";
import React from 'react'

interface Props {
    [propName: string]: any,
    children: JSX.Element[] | JSX.Element
}
const generateStyle = ({ direction, wrap, justify, align, alignContent, gap }: Props) => css(`
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