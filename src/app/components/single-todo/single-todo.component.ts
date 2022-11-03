import {Component, Input, OnInit} from '@angular/core';
import {TodoTaskModel} from "../../models/todo-task.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  @Input() task!:TodoTaskModel;
   taskSelector!:number;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectTask({$event}: { $event: any }) {
    this.taskSelector = $event.target.value;
    console.log(this.taskSelector)

  }

}
