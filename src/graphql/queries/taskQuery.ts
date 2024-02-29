import { GraphQLList, GraphQLID, GraphQLInt } from 'graphql';
import Task from '../../models/task';
import { TaskType } from '../typeDefs/taskType';

export const getTasks = {
  type: new GraphQLList(TaskType),
  args: {
    page: { type: GraphQLInt },
    limit: { type: GraphQLInt }
  },
  async resolve(_: any, { page = 1, limit = 10 }) {
    const startIndex = (page - 1) * limit;
    const tasks = await Task.find().skip(startIndex).limit(limit);
    return tasks;
  }
}

export const getTask = {
  type: TaskType,
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, args: any) {
    const task = await Task.findById(args.id);
    if (!task) {
      throw new Error('Tarea no encontrada');
    }
    return task;
  }
}