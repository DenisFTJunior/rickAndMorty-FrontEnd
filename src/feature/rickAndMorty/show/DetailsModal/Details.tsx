import React from 'react'

import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import Text from '../../../../components/apresentation/Text'
import { useCharactor } from '../loader/CharacterLoader'

const Details = () => {
    const charactor = useCharactor()
    return (
        <Flex justify='flex-start' wrap>
            <FlexItem>
                <Text></Text>
            </FlexItem>
            <FlexItem>
                {/* TYPE */}
            </FlexItem>
            <FlexItem>
                {/* LOCATION 3 SUB ITENS */}
            </FlexItem>
            <FlexItem>
                {/* GENDER */}
            </FlexItem>
            <FlexItem>
                {/* STATUS */}
            </FlexItem>
        </Flex>
    )
}

export default Details