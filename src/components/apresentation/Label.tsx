import { css } from '@emotion/css'
import React, { Children } from 'react'
import Flex from '../structure/Flex'
import FlexItem from '../structure/FlexItem'
import Text from './Text'

interface Props extends StyleProps {
    label: string
    text?: string
    children?: JSX.Element | JSX.Element[]
}

interface StyleProps {
    right?: boolean
}

const Label = ({ right, label, text, children }: Props) => {
    return (
        <Flex justify='flex-start' align='flex-start' gap={.7}>
            {right ? (
                <FlexItem margin='0 0 0 auto'>
                    <Text size='0.75rem'>{label}</Text>
                </FlexItem>
            ) : (
                <FlexItem>
                    <Text size='0.75rem'>{label}</Text>
                </FlexItem>
            )}
            <FlexItem>
                <Text size='1.5rem'>{text}</Text>
            </FlexItem>
            <Flex justify='space-between'>
                {children ? children : <></>}
            </Flex>
        </Flex>
    )
}

export default Label