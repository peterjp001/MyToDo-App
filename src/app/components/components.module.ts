import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {ListTodoComponent} from "./list-todo/list-todo.component";
import {ReactiveFormsModule} from "@angular/forms";
import { SingleTodoComponent } from './single-todo/single-todo.component';



@NgModule({
  declarations: [
    AddTodoComponent,
    ListTodoComponent,
    SingleTodoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddTodoComponent,
    ListTodoComponent,
  ]
})
export class ComponentsModule { }
