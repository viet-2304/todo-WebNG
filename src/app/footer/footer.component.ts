import { Component, OnInit } from '@angular/core';
import { todo } from '../todo/todo.model';
import { todoService } from '../todo/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public count: number=1;
  private listToDoActive: todo[] = [];
  private listToDoComplete: todo[] = [];
  listToDo: todo[] = [];

  constructor( private todoservice: todoService) {
    
   }

  ngOnInit(): void {
    this.listToDo = this.todoservice.getAllToDo();
    console.log(this.listToDo)
  }


  getCount() {
    
  }

  findToDoActive() {
    this.listToDoActive = this.todoservice.getToDoActive();
    console.log(this.listToDoActive)
  }

  findAllToDo() {}

  findToDoComplete() {
    this.listToDoComplete = this.todoservice.getListToDoComplete();
    console.log(this.listToDoComplete)
  }

}
