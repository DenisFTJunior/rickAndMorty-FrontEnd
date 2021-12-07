import { css } from "@emotion/css";
import React from 'react'

interface Props {
    [propName: string]: any,
    children: JSX.Element[] | JSX.Element
}

const generateStyle = ({ columns, rows, areas, gap, justify, align }: Props) => css(`
    display: grid;
    grid-template-columns: ${columns || '1fr'};
    grid-template-rows: ${rows || '1fr'};
    grid-template-areas:${areas};
    gap: ${gap};
    justify-items: ${justify || 'center'};
    align-items: ${align || 'center'};
    place-content: center;
`)

const FlexItem = (props: Props) => {
    const style = generateStyle(props)
    return < div className={style} >{props.children}</div>
}

export default FlexItem