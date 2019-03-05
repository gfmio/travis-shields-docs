import { task as gulpTask, TaskFunction } from "gulp";

/** Helper function to create tasks with better names that are not valid JS identifiers */
const task = (taskName: string, fn: TaskFunction) => {
  gulpTask(taskName, fn);
  return gulpTask(taskName);
};

export default task;
