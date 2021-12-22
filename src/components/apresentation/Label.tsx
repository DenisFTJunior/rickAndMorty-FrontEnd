import { css } from '@emotion/css'
import React from 'react'
import Flex from '../structure/Flex'
import FlexItem from '../structure/FlexItem'
import Text from './Text'

interface Props extends StyleProps {
    label: string
    text: string
}

interface StyleProps {
    right?: boolean
}

const Label = ({ right, label, text }: Props) => {
    return (
        <Flex justify='flex-start' align='flex-start' gap={.7}>
            {right ? (
                <FlexItem margin='0 0 0 auto'>
                    <Text size='xsm'>{label}</Text>
                </FlexItem>
            ) : (
                <FlexItem>
                    <Text size='xsm'>{label}</Text>
                </FlexItem>
            )}
            <FlexItem>
                <Text size='md'>{text}</Text>
            </FlexItem>
        </Flex>
    )
}

export default Label