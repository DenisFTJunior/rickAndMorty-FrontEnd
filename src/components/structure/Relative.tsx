import { css } from "@emotion/css";
import React from 'react'

interface StyleProps {
    top?: string
    left?: string
    right?: string
    bottom?: string
}

interface Props extends StyleProps { children: JSX.Element[] | JSX.Element }

const generateStyle = ({ top, left, right, bottom }: StyleProps) => css(`
    position:relative;
    top:${top};
    left:${left};
    right:${right};
    bottom:${bottom};`
)

const Relative = ({ children, ...props }: Props) => {
    const style = generateStyle(props)
    return < div className={style} > {children}</div >
}

export default Relative