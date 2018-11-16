import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  tasks: Task[];
  filterTask: Task;
  filterByName: string;
  filterByParentTask: number;
  filterByPriorityFrom: number;
  filterByPriorityTo: number;
  filterByStartDate: Date;
  filterByEndDate: Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService) {
    this.getTasks();
  }

  ngOnInit() {
    this.getTasks();
    this.filterTask = new Task();
  }

  getTasks(): void {
    this.taskService.getAllTasks().then(value => this.tasks = value);
  }
  update(t: Task ): void {
    this.router.navigate(['/update' , t.id]);
  }

  delete(t: Task): void {
    this.taskService.deleteTask(t.id, t)
      .then(
        value => {
          this.getTasks();
        }
      );
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
