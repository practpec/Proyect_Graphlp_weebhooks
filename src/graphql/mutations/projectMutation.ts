import { GraphQLID, GraphQLString } from 'graphql';
import Project from '../../models/project';
import { ProjectType } from '../typeDefs/projectType';

export const createProject = {
    type: ProjectType,
    args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    },
    async resolve(_: any, args: any) {
        const { name } = args;
        const newProject = new Project({ name });
        await newProject.save();
        return newProject;
    }
}