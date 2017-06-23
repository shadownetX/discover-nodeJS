import { Component, OnInit } from '@angular/core';

import { Task, Status } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().then(tasks => this.tasks = tasks);
  }

  getStatusClass(status: Status): string {
    switch (status) {
      case 'pending':
        return 'danger';
      case 'ongoing':
        return 'warning';
      case 'completed':
        return 'success';
      default:
        return 'default';
    }
  }

}
