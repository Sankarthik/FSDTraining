import { Component, OnInit, Output, NgModule } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../service/task.service';
import {Task} from '../model/task';
import {ParentTask} from "../model/parentTask";

@Component({
  selector: 'app-task-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() tasks;
  task: Task;
  parents= [];
  parentId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {
    this.task = new Task();
    this.task.priority = 1;
  }

  ngOnInit() {
    this.loadParents();
  }

  onSubmit() {
    if (this.parentId != null) {
      let parent = new ParentTask();
      parent.id = this.parentId;
      this.task.parentTask = parent;
    }
    console.log(this.task.startDate);
    this.taskService.addTask(this.task).then(
      value => {
        this.router.navigate(['./view']);
      }
    );
  }

  private loadParents() {
    this.taskService.getAllTasks().then(value => this.parents = value);
  }

}

