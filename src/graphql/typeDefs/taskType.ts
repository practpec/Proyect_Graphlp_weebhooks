import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const TaskType = new GraphQLObjectType({
    name: 'Task',
    description: 'Task Type Definition',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        createdBy: { type: GraphQLString },
        updatedBy: { type: GraphQLString },
        deletedBy: { type: GraphQLString },
    }),
});