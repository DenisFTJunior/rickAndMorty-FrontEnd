import { prop } from 'ramda'
import React from 'react'

import Avatar from '../../../../components/apresentation/Avatar'
import Text from '../../../../components/apresentation/Text'
import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import { useCharacter } from '../loader/CharacterLoader'

const Header = () => {
    const character = useCharacter()
    // Character info
    const name = prop('name', character)
    const image = prop('image', character)
    console.log('character', character)
    return (
        <Flex justify='flex-start'>
            <FlexItem width='20%' height='20%'>
                <Avatar size='20%' src={image} alt={name} />
            </FlexItem>
            <FlexItem>
                <Text size='lg' bold> {name} </Text>
            </FlexItem>
        </Flex>
    )
}

export default Header