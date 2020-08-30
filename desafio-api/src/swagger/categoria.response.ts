import { ApiProperty } from "@nestjs/swagger";

export class CategoriaResponse{
    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string;
}