import React, { createContext, useContext } from "react"

import useCharacterQuery from "../../../../utils/graphql/query/rickAndMorty/character"
import { Character } from "../../../../utils/graphql/query/rickAndMorty/types"

const Context = createContext({} as Character | undefined)
const { Provider } = Context
export const useCharactorState: Function = () => useContext(Context)
export const useCharactor: Function = () => useCharactorState()?.charactor

const CharacterLoader = () => {
  const { data, loading, error } = useCharacterQuery()

  if (loading) return <>Loading...</>

  return (
    <Provider value={data}>

    </Provider>
  )
}

export default CharacterLoader
