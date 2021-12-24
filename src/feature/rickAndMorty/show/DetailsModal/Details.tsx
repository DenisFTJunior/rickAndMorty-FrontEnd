import React from 'react'
import Label from '../../../../components/apresentation/Label'

import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import Text from '../../../../components/apresentation/Text'
import { useCharacter } from '../loader/CharacterLoader'

const Details = () => {
    const character = useCharacter()
    return (
        <Flex justify='flex-start' align='flex-start' wrap>
            <FlexItem margin='1rem'>
                <Label label='Species' text={character?.species} />
            </FlexItem>
            <FlexItem margin='1rem'>
                <Label label='Type' text={character?.type} />
            </FlexItem>
            <FlexItem margin='1rem'>
                <Label label='Location' text={character?.origin.name} />
            </FlexItem>
            <FlexItem margin='1rem'>
                <Label label='Gender' text={character?.gender} />
            </FlexItem>
            <FlexItem margin='1rem'>
                <Label label='Status' text={character?.status} />
            </FlexItem>
        </Flex>
    )
}

export default Details