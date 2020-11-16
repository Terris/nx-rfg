import { users } from './users.js';

export const resolvers = {
  Query: {
    users: () => users(),
  },
};
