import { GraphQLList, GraphQLID, GraphQLInt } from 'graphql';
import User from '../../models/user';
import { UserType } from '../typeDefs/userType';

export const getUsers = {
  type: new GraphQLList(UserType),
  args: {
    page: { type: GraphQLInt },
    limit: { type: GraphQLInt }
  },
  async resolve(_: any, { page = 1, limit = 10 }) {
    const startIndex = (page - 1) * limit;
    const users = await User.find().skip(startIndex).limit(limit);
    return users;
  }
}

export const getUser = {
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, args: any) {
    const user = await User.findById(args.id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user;
  }
}