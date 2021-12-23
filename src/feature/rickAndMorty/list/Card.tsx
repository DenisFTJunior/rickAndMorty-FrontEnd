import React from 'react'
import { Provider } from "react-redux"

import Avatar from "../../../components/apresentation/Avatar"
import Panel from "../../../components/apresentation/Panel"
import Tag from '../../../components/apresentation/Tag'
import Text from "../../../components/apresentation/Text"
import Flex from "../../../components/structure/Flex"
import FlexItem from "../../../components/structure/FlexItem"
import { Character } from '../../../utils/graphql/query/rickAndMorty/schema'
import { useModalDispatch } from '../../../utils/redux/modal/hooks'
import { open } from '../../../utils/redux/modal/slice'
import modalStore from '../../../utils/redux/modal/store'

interface Props {
    character: Character,
}

const Card = ({ character }: Props) => {
    const dispatch = useModalDispatch()
    console.log(character.species)

    return (
        <Panel width='25rem' onClick={() => dispatch(open())}>
            <Flex justify='flex-start' align='flex-start'>
                <FlexItem flex={1} width='10rem' height='10rem'>
                    <Avatar size='100%' src={character?.image} alt={`${character?.name} Image`} />
                </FlexItem>
                <FlexItem margin='0 1rem'>
                    <Flex justify='flex-start' align='flex-start' direction='column'>
                        <FlexItem flex={1} width='15rem'>
                            <Flex justify='flex-start' align='center'>
                                <FlexItem flex={1}>
                                    <Text bold underline size='md'>{character?.name}</Text>
                                </FlexItem>
                                <FlexItem flex={1}>
                                    <Tag label={character.status} />
                                </FlexItem>
                            </Flex>
                        </FlexItem>
                        <FlexItem flex={1}>
                            <Text size='xsm'>{character?.species}</Text>
                        </FlexItem>
                        <FlexItem flex={1}>
                            <Text>{character?.gender}</Text>
                        </FlexItem>
                        <FlexItem flex={1} align='flex-end'>
                            <Text italic size='xsm'>{character?.created}</Text>
                        </FlexItem>
                    </Flex>
                </FlexItem>
            </Flex >
        </Panel >
    )
}

const Wrapper = ({ character }: Props) => {
    return <Provider store={modalStore}><Card character={character} /></Provider>
}

export default Wrapper