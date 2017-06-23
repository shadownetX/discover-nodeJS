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
  tasks: Task[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void{
    this.todoService.getTasks().then(tasks => this.tasks = tasks);
  }

}
