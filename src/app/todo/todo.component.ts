import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent implements OnInit {
  private listTodo: Todo[];
  public value: string;
  public selectToDo: string;
  public toDoLeft: number;

  constructor() {}

  public ngOnInit(): void {
    this.selectToDo = 'all';
    this.inItData();
    this.value = '';
  }

  public inItData(): Todo[] {
    const data = JSON.parse(localStorage.getItem('todos')!);
    if (data == null) {
      this.listTodo = [];
    } else {
      this.listTodo = data;
      this.toDoLeft = this.listTodo.filter((todo) => !todo.status).length;
    }
    return this.listTodo;
  }

  public addNewToDo(): void {
    if (this.value.trim().length == 0) {
      return;
    }
    this.listTodo.push(new Todo(this.value, false));
    this.saveData();
    this.value = '';
    this.setCount();
  }

  public updateStatus(index: number): void {
    this.listTodo[index].status = !this.listTodo[index].status;
    this.saveData();
    this.setCount();
  }

  public updateName(text: string): void {
    this.saveData();
  }

  public deleteToDo(index: number): void {
    this.listTodo.splice(index, 1);
    this.saveData();
    this.setCount();
  }

  public setCount(): void {
    this.toDoLeft = this.listTodo.filter((todo) => !todo.status).length;
  }

  public checkToDoLeft(): boolean {
    return this.listTodo.filter((todo) => todo.status).length > 0;
  }

  public checkIfToDo(): boolean {
    return this.listTodo.length > 0;
  }

  public completeAll(): void {
    if (this.toDoLeft == 0) {
      this.listTodo.forEach((element) => {
        element.status = false;
      });
    } else {
      this.listTodo.forEach((element) => {
        element.status = true;
      });
    }
    this.setCount();
  }

  public clearComplete(): void {
    this.listTodo = this.listTodo.filter((todo) => !todo.status);
    this.saveData();
    this.setCount();
  }

  public setSelectToDo(): Todo[] {
    if (this.selectToDo == 'all') {
      return this.listTodo;
    } else if (this.selectToDo == 'active') {
      return this.listTodo.filter((todo) => !todo.status);
    } else if (this.selectToDo == 'complete') {
      return this.listTodo.filter((todo) => todo.status);
    }
    return this.listTodo;
  }

  private saveData(): void {
    localStorage.setItem('todos', JSON.stringify(this.listTodo));
  }
}
