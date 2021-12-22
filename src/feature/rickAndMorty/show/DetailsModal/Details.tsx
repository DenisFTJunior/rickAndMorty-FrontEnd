import React from 'react'
import Label from '../../../../components/apresentation/Label'

import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import Text from '../../../../components/apresentation/Text'
import { useCharactor } from '../loader/CharacterLoader'

const Details = () => {
    const charactor = useCharactor()
    return (
        <Flex justify='flex-start' wrap>
            <FlexItem>
                <Label label='Species' text={charactor.species} />
            </FlexItem>
            <FlexItem>
                <Label label='Type' text={charactor.type} />
            </FlexItem>
            <FlexItem>
                <Label label='Location'>
                    <Text>{`Name: ${charactor.origin.name}`}</Text>
                    <Text>{`Dimension: ${charactor.origin.dimension}`}</Text>
                </Label>
            </FlexItem>
            <FlexItem>
                <Label label='Gender' text={charactor.gender} />
            </FlexItem>
            <FlexItem>
                <Label label='Status' text={charactor.status} />
            </FlexItem>
        </Flex>
    )
}

export default Details