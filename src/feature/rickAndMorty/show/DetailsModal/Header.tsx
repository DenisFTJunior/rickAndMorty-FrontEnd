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

    return (
        <Flex justify='flex-start' align='flex-start'>
            <FlexItem grow={1}>
                <Avatar size='100%' src={image} alt={name} roundAvatar/>
            </FlexItem>
            <FlexItem grow={4} margin='0 1rem' align='center'>
                <Text size='lg' bold> {name} </Text>
            </FlexItem>
        </Flex>
    )
}

export default Header