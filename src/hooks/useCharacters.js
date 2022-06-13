import { gql, useQuery } from "@apollo/client";

// Attention !!!
// You must match the property key, and if the key of properties not match you will get error
// Example
// query {
//   characters {
//     results {
//       id
//       name
//       mage -> wrong key properties
//     }
//   }
// }

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS); // response object
  return {
    error,
    loading,
    data,
  };
};
