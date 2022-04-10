import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() public todoItem: Todo;
  @Input() public index: number;
  @Output() public deleteItem = new EventEmitter();
  @Output() public updateStatus = new EventEmitter();
  @Output() public updateName = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public setStatus(index: number): void {
    this.updateStatus.emit(index);
  }

  public setEdit(): void {
    this.todoItem.isEdit = true;
  }

  public deleteToDo(index: number): void {
    this.deleteItem.emit(index);
  }

  public setName(): void {
    this.todoItem.isEdit = false;
    let text = this.todoItem.name;
    this.updateName.emit(text);
  }
}
