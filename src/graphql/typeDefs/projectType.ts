import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const ProjectType = new GraphQLObjectType({
    name: 'Project',
    description: 'Project Type Definition',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        createdBy: { type: GraphQLString },
        updatedBy: { type: GraphQLString },
        deletedBy: { type: GraphQLString },
    }),
});