import React, { createContext, useContext } from "react"

import useCharactersQuery from "../../../../utils/graphql/query/rickAndMorty/characters"
import { Characters } from "../../../../utils/graphql/query/rickAndMorty/types"

const Context = createContext({} as Characters | undefined)
const { Provider } = Context
export const useCharactorsState: Function = () => useContext(Context)
export const useCharactors: Function = () => useCharactorsState()?.charactor

//create fetchMore
const CharactersLoader = () => {
  const { data, loading, error } = useCharactersQuery()

  if (loading) return <>Loading...</>

  return (
    <Provider value={data} >

    </Provider>
  )
}

export default CharactersLoader