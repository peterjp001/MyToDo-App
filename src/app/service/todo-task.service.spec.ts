import { TestBed } from '@angular/core/testing';

import { TodoTaskService } from './todo-task.service';

describe('TodoServiceService', () => {
  let service: TodoTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
