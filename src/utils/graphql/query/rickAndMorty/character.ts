import { gql, useQuery } from '@apollo/client'
import { RickAndMortyClient } from '../../config/client';
import { Character } from './types';

const QUERY = gql`
  query Character {
    character {
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

const characterQuery = () => {

  return useQuery<Character>(QUERY, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    client: RickAndMortyClient
  });


}

export default characterQuery
