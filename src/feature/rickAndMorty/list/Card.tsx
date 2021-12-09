import React from 'react'

import Avatar from "../../../components/apresentation/Avatar"
import Panel from "../../../components/apresentation/Panel"
import Text from "../../../components/apresentation/Text"
import Flex from "../../../components/structure/Flex"
import FlexItem from "../../../components/structure/FlexItem"
import { Character } from '../../../utils/graphql/query/rickAndMorty/schema'

interface Props {
    character: Character,
}

const Card = ({ character }: Props) => {
    return (
        <Panel >
            <Flex justify='flex-start' align='flex-start'>
                <FlexItem flex={2}><Avatar src={character?.image} alt={`${character?.name} Image`} /></FlexItem>
                <Flex justify='flex-start' align='flex-start' direction='column'>
                    <FlexItem flex={1}>
                        <Text bold underline size='md'>{character?.name}</Text>
                    </FlexItem>
                    <FlexItem flex={1}>
                        <Text>{character?.species}</Text>
                    </FlexItem>
                    <FlexItem flex={1}>
                        <Text>{character?.gender}</Text>
                    </FlexItem>
                    <FlexItem flex={1} align='flex-end'>
                        <Text>{character?.created}</Text>
                    </FlexItem>
                </Flex>
            </Flex>
        </Panel>
    )
}

export default Card