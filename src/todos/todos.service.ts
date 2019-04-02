import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateTodoDto } from './create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  create(todo: CreateTodoDto): Promise<InsertResult> {
    return this.todoRepository.insert(todo);
  }

  update(id: number, todo: CreateTodoDto): Promise<UpdateResult> {
    return this.todoRepository.update(id, todo);
  }

  getAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  getById(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  deleteById(id: number): Promise<DeleteResult> {
    return this.todoRepository.delete(id);
  }
}
