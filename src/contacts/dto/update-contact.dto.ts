import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {

    @IsOptional()
    @IsString({message : 'O email deve ser uma string'})
    name: string;

    @IsOptional()
    @IsString({message : 'O email deve ser uma string'})
    email: string;

    @IsOptional()
    @IsString({message : 'O telefone deve ser uma string'})
    phone?: string;

}
