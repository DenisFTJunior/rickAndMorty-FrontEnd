import { css } from "@emotion/css"
import React from "react"

interface Props extends StyleProps {
    src: string,
    alt: string,
}

interface StyleProps {
    size: string
    roundAvatar?: boolean
}

const generateStyle = ({ size, roundAvatar }: StyleProps) => css(`
    width:${size};
    height:${size};
    ${roundAvatar ? 'border-radius:100px' : ''}
    
`)

const Avatar = ({ src, alt, size, roundAvatar }: Props) => {
    const style = generateStyle({ size, roundAvatar })
    return <img src={src} alt={alt} className={style} />
}

export default Avatar