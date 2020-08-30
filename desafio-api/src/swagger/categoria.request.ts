import { ApiProperty } from "@nestjs/swagger";

export class CategoriaRequest{
    
    @ApiProperty()
    nome: string;
}