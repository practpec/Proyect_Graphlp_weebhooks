import { GraphQLList, GraphQLID } from 'graphql';
import Project from '../../models/project';
import { ProjectType } from '../typeDefs/projectType';

export const getProjects = {
  type: new GraphQLList(ProjectType),
  async resolve() {
    const projects = await Project.find();
    return projects;
  }
}

export const getProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, args: any) {
    const project = await Project.findById(args.id);
    if (!project) {
      throw new Error('Proyecto no encontrado');
    }
    return project;
  }
}