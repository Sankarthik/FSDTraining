import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {ActivatedRoute, Router} from '@angular/router';
//import {log} from 'util';
import {TaskService} from '../service/task.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task-update',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  tasks: Task[];
  task: Task;
  parents= [];
  parentId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTask(this.route.snapshot.paramMap.get('id')).then(value => {
      this.task = value;
    });
  }
  onSubmit() {
   // log(this.task);
    this.taskService.updateTask(this.task.id, this.task)
      .then(
       value => { this.router.navigate(['./view']);
       }
      );
  }

}
