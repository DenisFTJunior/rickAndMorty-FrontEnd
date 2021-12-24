import React, { createContext, useContext } from "react"

import Loading from "../../../../animation/Loading"
import useCharacterQuery from "../../../../utils/graphql/query/rickAndMorty/character"
import { Character } from "../../../../utils/graphql/query/rickAndMorty/schema"

const Context = createContext({} as Character | undefined)
const { Provider } = Context
export const useCharactorState: Function = () => useContext(Context)
export const useCharactor: Function = () => useCharactorState()?.charactor

const CharacterLoader = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { data, loading, error } = useCharacterQuery()

  if (loading) return <Loading />

  return (
    <Provider value={data}>
      {children}
    </Provider>
  )
}

export default CharacterLoader
