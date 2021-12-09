import { css } from '@emotion/css'
import React from 'react'

import Text from './Text'

interface Props extends StyleProps {
    label: string,
    color?: string,
}

interface StyleProps {
    bgColor?: string
}

const generateStyle = ({ bgColor }: StyleProps) => css(`
    display:inline-block;
    background-color: ${bgColor || '#E0E0E0'};
    margin:0.2rem;
`)

const Tag = ({ label, color, ...props }: Props) => {
    const style = generateStyle(props)
    return (
        <div className={style}>
            <Text element='h5' color={color}>{label}</Text>
        </div>
    )
}

export default Tag