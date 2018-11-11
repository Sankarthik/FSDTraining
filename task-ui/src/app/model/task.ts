import {ParentTask} from './parentTask';

export class Task {
  id: number;
  task: String;
  priority: number;
  startDate: Date;
  endDate: Date;
  parentTask: ParentTask;
}
