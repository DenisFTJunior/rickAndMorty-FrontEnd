import { gql, useQuery } from '@apollo/client'
import { usePageSelector } from '../../../redux/pageToLoad/hooks';
import { RickAndMortyClient } from '../../config/client';
import { Characters } from './schema'

const QUERY = gql`
  query Characters($page:Int) {
    characters(page:$page) {
      results{
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          dimension
        }
        image
        created
      }
    }
  }
`

const useCharactersQuery = () => {
  const page = usePageSelector(state => state.page)
  return useQuery<Characters>(QUERY, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    client: RickAndMortyClient,
    variables: { page }
  });


}

export default useCharactersQuery
