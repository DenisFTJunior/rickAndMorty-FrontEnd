import React from 'react'
import { isVoid } from '../../utils/validate/validators/void'
import Flex from '../structure/Flex'
import FlexItem from '../structure/FlexItem'
import Text from './Text'

interface Props {
    label: string
    text?: string
    children?: JSX.Element | JSX.Element[]
}


const Label = ({ label, text, children }: Props) => {
    return (
        <Flex justify='flex-start' align='flex-start' direction='column' gap={.7}>
            <FlexItem>
                <Text element='span' size='0.75rem'>{label}</Text>
            </FlexItem>

            {!!text ?
                <FlexItem>
                    <Text size='1.5rem'>{!isVoid(text) ? text : 'unknown'}</Text>
                </FlexItem>
                : <></>
            }
            <FlexItem>
                {children ? children : <></>}
            </FlexItem>
        </Flex>
    )
}

export default Label