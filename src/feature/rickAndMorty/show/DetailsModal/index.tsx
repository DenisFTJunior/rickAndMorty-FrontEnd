import React from 'react'

import Modal from '../../../../components/apresentation/modal'
import Flex from '../../../../components/structure/Flex'
import FlexItem from '../../../../components/structure/FlexItem'
import Details from './Details'
import Header from './Header'

const DetailsModal = () => {
    return (
        <Modal width='55rem'>
            <Flex direction='column' justify='flex-start'>
                <FlexItem>
                    <Header />
                </FlexItem>
                <FlexItem>
                    <Details />
                </FlexItem>
            </Flex>
        </Modal>
    )
}

export default DetailsModal