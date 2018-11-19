import { DatePipe } from '@angular/common';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http: HttpClient;
  taskHttpUrl = 'http://localhost:8080/tasks/';

  constructor(http: HttpClient, private datePipe : DatePipe ) {
    this.http = http;
  }

  getAllTasks(): Promise<any> {
    return this.http.get<Task>(this.taskHttpUrl).toPromise().then(value => value);      
  }

  getTask(id: string): Promise<any> {
    return this.http.get(this.taskHttpUrl + '' + id).toPromise().then(value => value);
  } 
  
  addTask(t: Task): Promise<any> {
    return this.http.post(this.taskHttpUrl, t).toPromise().then(value => value);
  }

  updateTask(id: number, t: Task): Promise<any> {
    return this.http.put(this.taskHttpUrl, t).toPromise().then(value => value);
  }

  deleteTask(id: number, t: Task): Promise<any> {
    return this.http.delete(this.taskHttpUrl + '' + id).toPromise().then(value => value);
  }
}
