import React from 'react'

import Modal from '../../../../components/apresentation/modal'
import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import CharacterLoader from '../loader/CharacterLoader'
import Details from './Details'
import Header from './Header'

const DetailsModal = () => {
    //create a selector for others modal
    return (
        <Modal width='55rem' name='show'>
            <CharacterLoader>
                <Flex align='flex-start' justify='flex-start' direction='column' >
                    <FlexItem margin='1rem'>
                        <Header />
                    </FlexItem>
                    <FlexItem margin='1rem'>
                        <Details />
                    </FlexItem>
                </Flex>
            </CharacterLoader>
        </Modal>
    )
}

export default DetailsModal