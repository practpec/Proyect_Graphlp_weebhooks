import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { getUsers, getUser } from './queries/userQuery';
import { login, createUser, deleteUser, updateUser } from './mutations/userMutation';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getUsers,
        getUser
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login,
        createUser,
        deleteUser,
        updateUser
    }
});

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});