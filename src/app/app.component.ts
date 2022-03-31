import { Component } from '@angular/core';
import { todoService } from './todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit() {
    
  }

  


  title = 'todoApp';
}
