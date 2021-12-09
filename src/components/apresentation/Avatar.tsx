import { css } from "@emotion/css"
import React from "react"

interface Props extends StyleProps {
    src: string,
    alt: string,
}

interface StyleProps {
    [propName: string]: any
}

const style = css(`
    width:100%;
    height:100%;
`)

const Avatar = ({ children, src, alt, ...props }: Props) => {
    return <img src={src} className={style} />
}

export default Avatar