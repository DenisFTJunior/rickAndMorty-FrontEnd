import React, { createContext, useContext } from "react"

import Loading from "../../../../animation/Loading"
import useCharactersQuery from "../../../../utils/graphql/query/rickAndMorty/characters"
import { Characters } from "../../../../utils/graphql/query/rickAndMorty/schema"

const Context = createContext({} as Characters | undefined)
const { Provider } = Context
const ActionContext = createContext({})
const { Provider: ActionProvider } = ActionContext

export const useCharactorsState: Function = () => useContext(Context)
export const useCharactors: Function = () => useCharactorsState()?.characters.results
export const useActionCharactors: Function = () => useContext(ActionContext)

const CharactersLoader = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { data, loading, error, fetchMore } = useCharactersQuery()

  if (loading) return <Loading />

  return (
    <ActionProvider value={({ fetchMore })}>
      <Provider value={data} >
        {children}
      </Provider>
    </ActionProvider>
  )
}

export default CharactersLoader