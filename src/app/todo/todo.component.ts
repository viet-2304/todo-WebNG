
import { Component, OnInit } from '@angular/core'
import { FooterComponent } from '../footer/footer.component';
import { todo } from './todo.model';
import { todoService } from './todo.service';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit{
    value = "";

    listToDo: todo[] = [];


 
 
    constructor(private todoservice: todoService,
               ){}
  ngOnInit(): void {
   this.updateToDo()
  }

  addNewToDo(){
    this.todoservice.addNewToDo(this.value)
   // this.footerComponent.ngOnInit()
    this.value = "";
    this.updateToDo();
  }

  updateStatus(index: number){
     this.listToDo[index].status = !this.listToDo[index].status;
      console.log(this.listToDo)
  }

  private updateToDo() {
   
    this.listToDo = this.todoservice.getAllToDo()
  }

  deleteToDo(index: number) {
      this.todoservice.deleteToDo(index);
      this.updateToDo();
  }

  
  


}