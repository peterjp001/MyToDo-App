import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoTaskService} from "../../service/todo-task.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm!: FormGroup;

  constructor( private formbuilder: FormBuilder, private taskService:TodoTaskService) { }

  ngOnInit(): void {
    this.todoForm = this.formbuilder.group({
        id:4,
        task:[null, Validators.required]
    })
  }

  addTodo() {
    this.taskService.addTask(this.todoForm.value);
  }
}
