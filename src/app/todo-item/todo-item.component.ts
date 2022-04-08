import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { Todos } from '../todos.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Input() index: number;
  @Output() deleteItem = new EventEmitter();
  @Output() updateStatus = new EventEmitter();
  @Output() updateName = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setStatus(index: number) {
    this.updateStatus.emit(index);
  }

  setEdit() {
    this.todoItem.isEdit = true;
  }

  deleteToDo(index: number): void {
    this.deleteItem.emit(index);
  }

  setName() {
    this.todoItem.isEdit = false;
    let text = this.todoItem.name;
    this.updateName.emit(text);
  }
}
