import { gql, useQuery } from '@apollo/client'
import { RickAndMortyClient } from '../../config/client';
import { Characters } from './schema'

const QUERY = gql`
  query Characters {
    characters {
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

  return useQuery<Characters>(QUERY, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    client: RickAndMortyClient
  });


}

export default useCharactersQuery
