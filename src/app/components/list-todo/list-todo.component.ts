import {Component, Input, OnInit} from '@angular/core';
import {TodoTaskService} from "../../service/todo-task.service";
import {TodoTaskModel} from "../../models/todo-task.model";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  constructor(private taskService: TodoTaskService) { }

  listTask!:TodoTaskModel[];

  ngOnInit(): void {
    this.listTask = this.taskService.getAllTasks();
  }

  selectTask(id: number) {
    console.log(id)

  }
}
