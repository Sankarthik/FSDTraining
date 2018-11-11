import {Injectable, Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import { Task } from '../model/task';

@Pipe({
  name: "TaskFilter"
})

@Injectable()
export class TaskFilter implements PipeTransform {

  transform(tasks: Task[], filterId: number, parentTaskFilterId: number, priorityFromFilterId: number, priorityToFilterId: number, startDateFilter: Date, endDateFilter: Date): any {
    function isIdAvailable(id) {
      return typeof id !== 'undefined' && id != 0;
    }

    function isDateAvailable(date) {
      return typeof date !== 'undefined' && date !== null;
    }

    if (isIdAvailable(filterId) || isIdAvailable(parentTaskFilterId) || isIdAvailable(priorityFromFilterId) || isIdAvailable(priorityToFilterId) || isDateAvailable(startDateFilter) || isDateAvailable(endDateFilter)) {
      let tempId: Task[] = JSON.parse(JSON.stringify(tasks));
      if (isIdAvailable(filterId)) {
        for (let i = 0; i < tasks.length; i++) {
          if (Number(tasks[i].id) !== Number(filterId)) {
            tempId.splice(i, 1);
          }
        }
      }
      let tempParentId: Task[] = JSON.parse(JSON.stringify(tempId));
      if (isIdAvailable(parentTaskFilterId)) {
        for (let i = 0; i < tempId.length; i++) {
          if (tempId[i].parentTask === null || Number(tempId[i].parentTask.id) !== Number(parentTaskFilterId)) {
            tempParentId.splice(i, 1);
          }
        }
      }

      let priorityFromId: Task[] = JSON.parse(JSON.stringify(tempParentId));
      if (isIdAvailable(priorityFromFilterId)) {
        for (let i = 0; i < tempParentId.length; i++) {
          if (Number(tempParentId[i].priority) < Number(priorityFromFilterId)) {
            priorityFromId.splice(i, 1);
          }
        }
      }

      let priorityToId: Task[] = JSON.parse(JSON.stringify(priorityFromId));
      if (isIdAvailable(priorityToFilterId)) {
        for (let i = 0; i < priorityFromId.length; i++) {
          if (Number(priorityFromId[i].priority) > Number(priorityToFilterId)) {
            priorityToId.splice(i, 1);
          }
        }
      }

      let startDate: Task[] = JSON.parse(JSON.stringify(priorityToId));
      console.log(startDate);
      if (isDateAvailable(startDateFilter)) {
        for (let i = 0; i < priorityToId.length; i++) {
          if (priorityToId[i].startDate === null || moment(priorityToId[i].startDate).isBefore(moment(startDateFilter))) {
            startDate.splice(i, 1);
          }
        }
      }

      let endDate: Task[] = JSON.parse(JSON.stringify(startDate));
      if (isDateAvailable(endDateFilter)) {
        for (let i = 0; i < priorityToId.length; i++) {
          if (priorityToId[i].endDate === null || moment(priorityToId[i].endDate).isAfter(moment(endDateFilter))) {
            endDate.splice(i, 1);
          }
        }
      }

      return endDate;
    }
    return tasks;
  }
}
