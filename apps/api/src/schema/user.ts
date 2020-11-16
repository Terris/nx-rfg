import { gql } from 'apollo-server-express';

export const userSchema = gql`
  type User {
    id: ID!
    email: String!
  }
  type Query {
    users: [User]
  }
  input CreateUserInput {
    email: String!
  }
  input UpdateUserInput {
    email: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
  }
`;
