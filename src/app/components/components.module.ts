import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {ListTodoComponent} from "./list-todo/list-todo.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddTodoComponent,
    ListTodoComponent,
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
