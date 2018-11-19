import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {ActivatedRoute, Router} from '@angular/router';
//import {log} from 'util';
import {TaskService} from '../service/task.service';
import {DatePipe} from "@angular/common";
import * as moment from 'moment';
import { isNullOrUndefined } from 'util';

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
  today: any;
  errorMsg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(this.route.snapshot.paramMap.get('id')).then(value => {
      console.log(value);
      this.task = value;
    });
    this.today = new Date();
  }
  onSubmit() {
    if(!this.validateForm()) {
      console.log(this.errorMsg);
      return false;
    }
    this.taskService.updateTask(this.task.id, this.task)
      .then(
       value => { this.router.navigate(['./view']);
       }
      );
  }

  public validateForm() {
    let t = new Date();
    let today = new Date(t.getFullYear(), t.getMonth(), t.getDate() );
    let endDate = new Date(this.task.endDate);
    let startDate = new Date(this.task.startDate);
    let formattedDate;
    console.log(this.task.task);
    if(isNullOrUndefined(this.task.task)) {
      this.errorMsg = `Task name is mandatory`;
      return false;
    }
    if(isNullOrUndefined(this.task.startDate)) {
      this.errorMsg = `Start Date is mandatory`;
      return false;
    }

    if (endDate < today || startDate < today) {
      formattedDate = this.formatDate(today);    //moment(today).format('DD-MM-YYYY');
      this.errorMsg = `Start or End Date should be ${formattedDate} or in the future`;
      return false;
    }
    if(endDate < startDate) {
      formattedDate = this.formatDate(startDate); 
      this.errorMsg = `End Date should be greater than start date: ${formattedDate}`;
      return false;
    }
    return true;
  }

  public formatDate(date: any) {
    return moment(date).format('DD-MM-YYYY');
  }

}
