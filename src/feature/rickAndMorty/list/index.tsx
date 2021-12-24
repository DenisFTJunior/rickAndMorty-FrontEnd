import { map } from 'ramda'
import React from 'react'
import Background from '../../../animation/rickAndMorty/Background'

import Flex from '../../../components/structure/Flex'
import Card from './Card'
import CharactersLoader, { useCharactors } from './loader/CharactersLoader'

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
        </Background>
    )
}

export default Wrapper