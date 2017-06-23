import { Component,Input, OnInit } from '@angular/core';

import { Task } from '../../task';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

@Input()
task: Task;

  constructor() { }

  ngOnInit() {
  }

}
