import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { Todos } from '../todos.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent implements OnInit {
  value: string;
  isEdit: boolean;
  selectToDo: string;
  todoList: Todos;
  toDoLeft: number;

  constructor() {}

  ngOnInit(): void {
    this.selectToDo = 'all';
    this.todoList = new Todos();
    this.getData();
    this.isEdit = false;
    this.value = '';
    this.toDoLeft = this.todoList.toDoLeft();
  }

  getData() {
    const data = this.todoList.inItData();
  }

  addNewToDo(): void {
    if (this.value.trim().length == 0) {
      return;
    }
    this.todoList.addToDo(new Todo(this.value, false));
    this.value = '';
    this.setCount();
  }

  updateStatus(index: number) {
    this.todoList.updateStatus(index);
    this.setCount();
  }

  updateName(text: string) {
    this.todoList.updateName();
  }

  deleteToDo(index: number): void {
    this.todoList.deleteTodo(index);
    this.setCount();
  }

  setCount() {
    this.toDoLeft = this.todoList.toDoLeft();
  }

  checkToDoLeft(): boolean {
    return this.todoList.checkToDoLeft();
  }

  checkIfToDo(): boolean {
    return this.todoList.checkIfToDo();
  }

  completeAll(): void {
    if (this.toDoLeft == 0) {
      this.todoList.activeAllToDo();
    } else {
      this.todoList.completeAllTodo();
    }
    this.setCount();
  }

  clearComplete(): void {
    this.todoList.clearTodos();
    this.getData();
    this.setCount();
  }

  setSelectToDo(): Todo[] {
    if (this.selectToDo == 'all') {
      return this.todoList.getAllTodos();
    } else if (this.selectToDo == 'active') {
      return this.todoList.getTodosActive();
    } else if (this.selectToDo == 'complete') {
      return this.todoList.getTodosComplete();
    }
    return this.todoList.getAllTodos();
  }
}
