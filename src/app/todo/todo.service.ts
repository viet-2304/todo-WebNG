import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { todo } from './todo.model';

@Injectable()
export class todoService implements OnInit {
 // todoListChange = new EventEmitter<todo[]>();
  private todoList: todo[] = [];
  private listToDoLocal = '';
  private listToDoActive: todo[] = [];
  private listToDoComplete: todo[] = [];
  listToDoNotComplete: todo[] = [];

  constructor() {

  }
  ngOnInit(): void {
    if (localStorage.getItem('todos')) {
      console.log(localStorage.getItem('todos'));
    }

  }

  public addNewToDo(text: string) {
    this.todoList.push(new todo(text, false));
    //this.todoListChange.emit(this.todoList.slice());
     console.log(this.todoList);
  }

  public getAllToDo() {
    return this.todoList.slice();
  }

  public deleteToDo(index: number) {
    this.todoList.splice(index, 1);
  }

  public getListToDoComplete() {
    this.listToDoNotComplete = [];
    this.todoList.forEach((element) => {
      if (element.status == true) {
        this.listToDoNotComplete.push(element);
      }
    });
    return this.listToDoNotComplete;
  }

  public getToDoActive() {
      console.log(this.todoList)
    this.todoList.forEach((element) => {
        console.log(element)
      if (element.status.toString() == "false") {
          
        this.listToDoActive.push(element);
      }
    });
    console.log(this.listToDoActive)
    return this.listToDoActive;
  }
}
