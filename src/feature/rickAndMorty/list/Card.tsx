import React from 'react'
import { Provider } from "react-redux"

import Link from '../../../components/action/Link'

import Avatar from "../../../components/apresentation/Avatar"
import Panel from "../../../components/apresentation/Panel"
import Tag from '../../../components/apresentation/Tag'
import Text from "../../../components/apresentation/Text"
import Absolute from '../../../components/structure/Absolute'
import Flex from "../../../components/structure/Flex"
import FlexItem from "../../../components/structure/FlexItem"
import Relative from '../../../components/structure/Relative'
import { Character } from '../../../utils/graphql/query/rickAndMorty/schema'
import { useModalDispatch } from '../../../utils/redux/modal/hooks'
import { open } from '../../../utils/redux/modal/slice'
import modalStore from '../../../utils/redux/modal/store'

interface Props {
    character: Character,
}

const Card = ({ character }: Props) => {
    const dispatch = useModalDispatch()

    return (
        <Link onClick={() => dispatch(open())}>
            <Panel width='25rem'>
                <Flex justify='flex-start' align='flex-start'>
                    <FlexItem flex={1} width='10rem' height='10rem'>
                        <Avatar size='100%' src={character?.image} alt={`${character?.name} Image`} />
                    </FlexItem>
                    <FlexItem margin='0 1rem'>
                        <Flex justify='flex-start' align='flex-start' direction='column'>
                            <FlexItem flex={1} width='15rem'>
                                <Flex justify='flex-start' align='center'>
                                    <FlexItem flex={3} width='10rem'>
                                        <Text bold size='1.5rem'>{character?.name}</Text>
                                    </FlexItem>
                                    <FlexItem flex={1}>
                                        <Absolute>
                                            <Relative bottom='2rem' left='5rem'>
                                                <Tag label={character.status} />
                                            </Relative>
                                        </Absolute>
                                    </FlexItem>
                                </Flex>
                            </FlexItem>
                            <FlexItem flex={1}>
                                <Text element='span' size='sm'>{character?.species}</Text>
                            </FlexItem>
                            <FlexItem flex={1}>
                                <Text element='span'>{character?.gender}</Text>
                            </FlexItem>
                            <FlexItem width='100%'>
                                <Flex justify='flex-end' align='flex-end'>
                                    <Text italic element='span' size='0.75rem'>{character?.created}</Text>
                                </Flex>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex >
            </Panel >
        </Link>
    )
}

const Wrapper = ({ character }: Props) => {
    return <Provider store={modalStore}><Card character={character} /></Provider>
}

export default Wrapper