import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() public todoItem: Todo;
  @Input() public index: number;
  @Output() public deleteItem = new EventEmitter<number>();
  @Output() public updateStatus = new EventEmitter<number>();
  @Output() public updateName = new EventEmitter<void>();

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
    this.updateName.emit();
  }
}
