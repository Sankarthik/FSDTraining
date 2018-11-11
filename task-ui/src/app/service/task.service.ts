import { DatePipe } from '@angular/common';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/task';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http: HttpClient;
  taskHttpUrl = 'http://localhost:8080/tasks/';
  //taskUrl = 'http://localhost:8080/task/';

  //taskUrl = 'assets/MOCK_DATA.json';
  constructor(http: HttpClient, private datePipe : DatePipe ) {
    this.http = http;
  }

  getAllTasks(): Promise<any> {
    return this.http.get<Task>(this.taskHttpUrl).toPromise().then(value => value);      
  }

  getTask(id: string): Promise<any> {
    return this.http.get(this.taskHttpUrl + '' + id).toPromise().then(value => value);
  }

  updateTask(id: number, t: Task): Promise<any> {
    return this.http.put(this.taskHttpUrl, t).toPromise().then(value => value);
  }

  deleteTask(id: number, t: Task): Promise<any> {
    return this.http.delete(this.taskHttpUrl + '' + id).toPromise().then(value => value);
  }

  addTask(t: Task): Promise<any> {
    console.log(t);
    //t.startDate = this.datePipe.transform(t.startDate, 'dd-MM-yyyy');
    //t.endDate = new Date(this.datePipe.transform(t.endDate, 'dd-MM-yyyy'));
    console.log(t.startDate);
    //t.startDate = moment(t.startDate, 'dd-MM-yyyy').toDate;

    return this.http.post(this.taskHttpUrl, t).toPromise().then(value => value);
  }
}
