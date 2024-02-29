import { GraphQLList, GraphQLID } from 'graphql';
import User from '../../models/user';
import { UserType } from '../typeDefs/userType';

export const getUsers = {
  type: new GraphQLList(UserType),
  async resolve() {
    const users = await User.find();
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
    return user;
  }
}