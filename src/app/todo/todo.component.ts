import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent implements OnInit {
  value: string;
  isEdit: boolean;
  listToDo: Todo[];
  selectToDo: string;

  constructor() {}
  ngOnInit(): void {
    this.selectToDo = 'all';
    this.listToDo = [];
    this.isEdit = false;
    this.value = '';
  }

  addNewToDo(): void {
    if (this.value.trim().length == 0) {
      return;
    }
    this.listToDo.push(new Todo(this.value, false));
    this.value = '';
  }

  updateStatus(index: number) {
    this.listToDo[index].status = !this.listToDo[index].status;
  }

  deleteToDo(index: number): void {
    this.listToDo.splice(index, 1);
  }

  toDoLeft(): number {
    return this.listToDo.filter((todo) => !todo.status).length;
  }

  checkToDoLeft(): boolean {
    return this.listToDo.filter((todo) => todo.status).length > 0;
  }

  checkIfToDo(): boolean {
    return this.listToDo.length > 0;
  }

  completeAll() {
    if (this.toDoLeft() == 0) {
      this.listToDo.forEach((todo) => {
        todo.status = false;
      });
    } else {
      this.listToDo.forEach((todo) => {
        todo.status = true;
      });
    }
  }

  clearComplete(): void {
    this.listToDo = this.listToDo.filter((todo) => !todo.status);
  }

  setSelectToDo(): Todo[] {
    if (this.selectToDo == 'all') {
      return this.listToDo;
    } else if (this.selectToDo == 'active') {
      return this.listToDo.filter((todo) => !todo.status);
    } else if (this.selectToDo == 'complete') {
      return this.listToDo.filter((todo) => todo.status);
    }
    return this.listToDo;
  }
}
