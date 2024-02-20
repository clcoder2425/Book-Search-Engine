// This will be used to hold the query GET_ME, which will execute the me query set up using Apollo Server.

import {gql} from '@apollo/client';

export const GET_ME = gql`
    query Me {
  me {
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
    `;