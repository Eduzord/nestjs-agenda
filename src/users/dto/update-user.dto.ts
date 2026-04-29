import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString({message : 'O nome deve ser uma string'})
    name: string;

    @IsString({message : 'O email deve ser uma string'})
    email: string;
}
