import { map } from 'ramda'
import React from 'react'
import Background from '../../../animation/rickAndMorty/Background'

import Flex from '../../../components/structure/Flex'
import Card from './Card'
import CharactersLoader, { useCharactors } from './loader/CharactersLoader'
import DetailsModal from '../show/DetailsModal'

const CharactersList = () => {
    const characters = useCharactors()
    return <>{map((character) =>
        <Card character={character} />
        , characters)}</>
}

const Wrapper = () => {
    return (
        <Background>
            <CharactersLoader>
                <Flex wrap>
                    <CharactersList />
                </Flex>
            </CharactersLoader>
            <DetailsModal />
        </Background>
    )
}

export default Wrapper