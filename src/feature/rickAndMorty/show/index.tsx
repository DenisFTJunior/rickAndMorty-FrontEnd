import React from 'react'

import DetailsModal from './DetailsModal'
import CharacterLoader from './loader/CharacterLoader'

const ShowModal = () => {
    return (
        <CharacterLoader>
            <DetailsModal />
        </CharacterLoader>
    )
}

export default ShowModal