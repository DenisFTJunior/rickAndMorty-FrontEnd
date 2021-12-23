import { css } from '@emotion/css'
import React from 'react'
import Flex from '../structure/Flex'
import Relative from '../structure/Relative'

import Text from './Text'

interface Props extends StyleProps {
    label: string,
    color?: string,
}

interface StyleProps {
    bgColor?: string
}

const generateStyle = ({ bgColor }: StyleProps) => css(`
    display:flex;
    width:4rem;
    height:2rem;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor || '#E0E0E0'};
    padding:0.5rem;
`)

const Tag = ({ label, color, ...props }: Props) => {
    const style = generateStyle(props)
    return (
        <Relative top='.2rem' right='.2rem'>
            <div className={style}>

                <Text element='h5' color={color}>{label}</Text>

            </div>
        </Relative>
    )
}

export default Tag