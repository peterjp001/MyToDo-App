import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoTaskService} from "../../service/todo-task.service";
import {map, Observable} from "rxjs";
import {TodoTaskModel} from "../../models/todo-task.model";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm!: FormGroup;

  myForm$!:Observable<TodoTaskModel>;

  constructor( private formbuilder: FormBuilder, private taskService:TodoTaskService) { }

  ngOnInit(): void {
    this.todoForm = this.formbuilder.group({
        task:[null, Validators.required],
    },{updateOn: 'blur'});

    this.myForm$ = this.todoForm.valueChanges.pipe(
      map(formValue=>({
        ...formValue
      })),
    )
  }



  addTodo() {
    this.taskService.addTask(this.todoForm.value);
  }
}
