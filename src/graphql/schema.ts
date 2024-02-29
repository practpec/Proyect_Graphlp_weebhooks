import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { getUsers, getUser } from './queries/userQuery';
import { getTasks, getTask } from './queries/taskQuery';
import { getProjects, getProject } from './queries/projectQuery';
import { login, createUser, deleteUser, updateUser } from './mutations/userMutation';
import { createTask } from './mutations/taskMutation';
import { createProject } from './mutations/projectMutation';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getUsers, //paginado
        getUser,
        getTasks, //paginado
        getTask,
        getProjects,
        getProject
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login,
        createUser,
        deleteUser,
        updateUser,
        createTask,
        createProject
    }
});

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});