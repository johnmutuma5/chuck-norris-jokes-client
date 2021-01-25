import {gql} from "@apollo/client";

export const GET_RANDOM_JOKE = gql`
  query RandomJoke ($category: String!) {
    random_joke(category: $category) {
      status
      value {
        id
        text
        joke_url
        icon_url
      }
    }
  }
`;

