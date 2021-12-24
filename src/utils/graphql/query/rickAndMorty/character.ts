import { gql, useQuery } from '@apollo/client'

import { RickAndMortyClient } from '../../config/client';
import { Character } from './schema';

const QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
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
`

const useCharacterQuery = ({ id }: { id: string }) => {
  return useQuery<Character>(QUERY, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: { id },
    skip: !id,
    client: RickAndMortyClient
  });


}

export default useCharacterQuery
