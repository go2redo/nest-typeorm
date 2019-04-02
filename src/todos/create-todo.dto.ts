import { Length, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @Length(10, 20)
  @IsOptional()
  readonly name?;

  @IsBoolean()
  @IsOptional()
  readonly status = false;
}
