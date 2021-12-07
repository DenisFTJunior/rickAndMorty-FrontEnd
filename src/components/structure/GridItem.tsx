import { css } from "@emotion/css";
import React from 'react'

interface Props {
    [propName: string]: any,
    children: JSX.Element[] | JSX.Element
}

const generateStyle = ({ startColumn, startRow, area, align, justify }: Props) => css(`
    display: grid;
    grid-column-start: ${startColumn};
    grid-row-start: ${startRow};
    grid-area: ${area};
    justify-self: ${justify};
    align-self: ${align};
`)

const GridItem = (props: Props) => {
    const style = generateStyle(props)
    return < div className={style} >{props.children}</div>
}

export default GridItem