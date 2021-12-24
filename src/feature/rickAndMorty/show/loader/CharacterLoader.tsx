import React, { createContext, useContext } from "react"

import Loading from "../../../../animation/Loading"
import useCharacterQuery from "../../../../utils/graphql/query/rickAndMorty/character"
import { Character } from "../../../../utils/graphql/query/rickAndMorty/schema"
import { useModalSelector } from "../../../../utils/redux/modal/hooks"

const Context = createContext({} as Character | undefined)
const { Provider } = Context
export const useCharacterState: Function = () => useContext(Context)
export const useCharacter: Function = () => useCharacterState()?.character

const CharacterLoader = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const id = useModalSelector(state => state.data.id)
  const { data, loading, error } = useCharacterQuery({ id })
  if (loading) return <Loading />

  return (
    <Provider value={data}>
      {children}
    </Provider>
  )
}

export default CharacterLoader
