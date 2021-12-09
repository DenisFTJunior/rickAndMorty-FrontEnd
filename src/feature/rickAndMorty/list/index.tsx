import { map } from 'ramda'
import React from 'react'

import Card from './Card'
import CharactersLoader, { useCharactors } from './loader/CharactersLoader'

const CharactersList = () => {
    const characters = useCharactors()
    return <>{map((character) => <Card character={character} />, characters)}</>
}

const Wrapper = () => {
    return <CharactersLoader><CharactersList /></CharactersLoader>
}

export default Wrapper