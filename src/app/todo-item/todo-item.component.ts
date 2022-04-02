import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Input() index: number;
  @Output() deleteItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteToDo(index: number): void {
    this.deleteItem.emit(index);
  }
}
