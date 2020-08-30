import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator"

export class CategoriaDTO{
    
    @ApiProperty({
        type: String,
        description: 'nome da categoria'
    })
    @IsString()
    @IsNotEmpty()
    nome: string;
}