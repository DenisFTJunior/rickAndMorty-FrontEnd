import React from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsInboxFill } from 'react-icons/bs'

import { usePageDispatch, usePageSelector } from '../../utils/redux/pageToLoad/hooks'
import { goToInitialPage, goToPage } from '../../utils/redux/pageToLoad/slice'
import Flex from "../structure/Flex"
import Link from './Link'

const PageController = ({ fetchMore }: any) => {
    const page = usePageSelector(state => state.page)
    const dispatch = usePageDispatch()
    return (
        <Flex gap={1}>
            <Link onClick={() => {
                if (page !== 1) {
                    dispatch(goToPage(page - 1))
                    fetchMore({
                        variables: { page },
                    })
                }
            }}>
                <BsFillArrowLeftSquareFill size="2rem" color='#fff' />
            </Link>
            <Link onClick={() => {
                dispatch(goToInitialPage())
                fetchMore({
                    variables: { page },
                })
            }}>
                <BsInboxFill size="2rem" color='#fff' />
            </Link>
            <Link onClick={() => {
                dispatch(goToPage(page + 1))
                fetchMore({
                    variables: { page },
                })
            }}>
                <BsFillArrowRightSquareFill size="2rem" color='#fff' />
            </Link>
        </Flex >
    )
}

export default PageController