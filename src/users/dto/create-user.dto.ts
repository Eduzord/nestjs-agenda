import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({message : 'O nome deve ser uma string'})
    @IsNotEmpty({message : 'O nome é obrigatório'})
    name: string;

    @IsEmail({},{message : 'O email deve ser um email válido'})
    @IsNotEmpty({message : 'O email é obrigatório'})
    email: string;

    
}
