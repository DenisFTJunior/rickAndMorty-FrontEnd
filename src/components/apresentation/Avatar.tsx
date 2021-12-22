import { css } from "@emotion/css"
import React from "react"

interface Props {
    src: string,
    alt: string,
}

const style = css(`
    width:100%;
    height:100%;
`)

const Avatar = ({ src, alt }: Props) => {
    return <img src={src} alt={alt} className={style} />
}

export default Avatar