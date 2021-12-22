import { prop, propOr } from 'ramda'
import React from 'react'

import Text from '../../../../components/apresentation/Text'
import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import { useCharactor } from '../loader/CharacterLoader'

const Header = () => {
    const charactor = useCharactor()
    // Character info
    const name = propOr('', 'name', charactor)
    const image = prop('image', charactor)
    return (
        <Flex justify='flex-start'>
            <FlexItem>
                {/* Avatar */}
            </FlexItem>
            <FlexItem>
                <Text size='lg' bold> {name} </Text>
            </FlexItem>
        </Flex>
    )
}

export default Header