import React, { createContext, useContext, useEffect } from "react"

import useCharactersQuery from "../../../../utils/graphql/query/rickAndMorty/characters"
import { Characters } from "../../../../utils/graphql/query/rickAndMorty/schema"

const Context = createContext({} as Characters | undefined)
const { Provider } = Context
export const useCharactorsState: Function = () => useContext(Context)
export const useCharactors: Function = () => useCharactorsState()?.characters.results

//create fetchMore
const CharactersLoader = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { data, loading, error } = useCharactersQuery()

  if (loading) return <>Loading...</>

  return (
    <Provider value={data} >
      {children}
    </Provider>
  )
}

export default CharactersLoader