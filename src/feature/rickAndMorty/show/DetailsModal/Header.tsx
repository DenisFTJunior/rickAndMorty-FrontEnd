import { prop } from 'ramda'
import React from 'react'

import Avatar from '../../../../components/apresentation/Avatar'
import Text from '../../../../components/apresentation/Text'
import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import { useCharactor } from '../loader/CharacterLoader'

const Header = () => {
    const charactor = useCharactor()
    // Character info
    const name = prop('name', charactor)
    const image = prop('image', charactor)
    return (
        <Flex justify='flex-start'>
            <FlexItem width='20%' height='30%'>
                <Avatar src={image} alt={name} />
            </FlexItem>
            <FlexItem>
                <Text size='lg' bold> {name} </Text>
            </FlexItem>
        </Flex>
    )
}

export default Header