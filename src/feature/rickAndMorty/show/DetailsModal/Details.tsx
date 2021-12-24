import React from 'react'
import Label from '../../../../components/apresentation/Label'

import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import Text from '../../../../components/apresentation/Text'
import { useCharacter } from '../loader/CharacterLoader'

const Details = () => {
    const character = useCharacter()
    return (
        <Flex justify='flex-start' wrap>
            <FlexItem>
                <Label label='Species' text={character?.species} />
            </FlexItem>
            <FlexItem>
                <Label label='Type' text={character?.type} />
            </FlexItem>
            <FlexItem>
                <Label label='Location'>
                    <Text>{`Name: ${character?.origin.name}`}</Text>
                    <Text>{`Dimension: ${character?.origin.dimension}`}</Text>
                </Label>
            </FlexItem>
            <FlexItem>
                <Label label='Gender' text={character?.gender} />
            </FlexItem>
            <FlexItem>
                <Label label='Status' text={character?.status} />
            </FlexItem>
        </Flex>
    )
}

export default Details