import { map } from 'ramda'
import { Provider } from 'react-redux'
import React from 'react'

import Background from '../../../animation/rickAndMorty/Background'
import Flex from '../../../components/structure/Flex'
import Card from './Card'
import CharactersLoader, { useActionCharactors, useCharactors } from './loader/CharactersLoader'
import DetailsModal from '../show/DetailsModal'
import PageController from '../../../components/action/PageController'
import pageStore from '../../../utils/redux/pageToLoad/store'

const CharactersList = () => {
    const characters = useCharactors()
    const { fetchMore } = useActionCharactors()
    return (
        <>
            <Flex wrap>{map((character) =>
                <Card character={character} />
                , characters)}
            </Flex>
            <PageController fetchMore={fetchMore} />
        </>
    )
}

const Wrapper = () => {
    return (
        <Provider store={pageStore}>
            <Background>
                <CharactersLoader>

                    <CharactersList />

                </CharactersLoader>
                <DetailsModal />
            </Background>
        </Provider>
    )
}

export default Wrapper