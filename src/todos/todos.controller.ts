import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.service.create(createTodoDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateTodo(@Body() createTodoDto: CreateTodoDto, @Param('id') id: number) {
    return this.service.update(id, createTodoDto);
  }

  @Get()
  getAll(): Promise<Todo[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.service.deleteById(id);
  }
}
