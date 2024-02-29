import { GraphQLID, GraphQLString } from 'graphql';
import Task from '../../models/task';
import { TaskType } from '../typeDefs/taskType';

export const createTask = {
    type: TaskType,
    args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    },
    async resolve(_: any, args: any) {
        const { name, description } = args;
        const newTask = new Task({ name, description });
        await newTask.save();
        return newTask;
    }
}