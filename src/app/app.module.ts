import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToDoComponent } from './todo/todo.component';
import { todoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToDoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [todoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
