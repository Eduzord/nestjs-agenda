import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateContactDto {

    @IsString({message : 'O nome deve ser um texto'})
    @IsNotEmpty({message : 'O nome é obrigatório'})
    name: string;

    @IsEmail({},{message : 'O email deve ser um email válido'})
    @IsNotEmpty({message : 'O email é obrigatório'})
    email: string;
    
    @IsOptional()
    
    phone?: string;

    @IsNotEmpty({message : 'O userId é obrigatório'})
    @IsUUID('all', {message : 'O userId deve ser um UUID válido'})
    userId: string;
}
