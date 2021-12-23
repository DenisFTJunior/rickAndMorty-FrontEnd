import { css } from "@emotion/css"
import React from "react"

interface Props extends StyleProps {
    src: string,
    alt: string,

}

interface StyleProps {
    size: string
}

const generateStyle = ({ size }: StyleProps) => css(`
    width:${size};
    height:${size};
`)

const Avatar = ({ src, alt, size }: Props) => {
    const style = generateStyle({ size })
    return <img src={src} alt={alt} className={style} />
}

export default Avatar