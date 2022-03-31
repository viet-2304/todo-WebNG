import { Component, OnInit } from '@angular/core';
import { todo } from './todo.model';
import { todoService } from './todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent implements OnInit {
  value: string = '';
  isEdit: boolean = false;
  listToDo: todo[] = [];
  selectToDo: string = '';

  constructor(private todoservice: todoService) {}
  ngOnInit(): void {
    this.selectToDo = 'all';
    // this.updateToDo();
  }

  addNewToDo(): void {
    if (this.value.trim().length == 0) {
      return;
    }
    this.listToDo.push(new todo(this.value, false));
    this.value = '';
  }

  editToDo(index: number) {}
  updateStatus(index: number) {
    this.listToDo[index].status = !this.listToDo[index].status;
    console.log(this.listToDo);
  }

  deleteToDo(index: number): void {
    this.todoservice.deleteToDo(index);
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
    console.log(this.listToDo);
  }

  setSelectToDo(): todo[] {
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
