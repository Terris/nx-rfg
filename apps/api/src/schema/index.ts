import { mergeSchemas } from 'apollo-server-express';
import { userSchema } from './user';
import { resolvers } from '../resolvers';

export const schema = mergeSchemas({
  schemas: [userSchema],
  resolvers,
});
