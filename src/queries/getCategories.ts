import {gql} from "@apollo/client";

export const GET_CATEGORIES = gql`
  query JokeCategores {
    categories {
      status
      value
    }
  }
`;

