import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { Categoria } from '../models/categoria.entity';
import { CategoriaService } from '../service/categoria.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CategoriaResponse } from 'src/swagger/categoria.response';
import { CategoriaDTO } from '../dto/categoria.dto';

@Controller('categories')
export class CategoriasController {

    constructor(private categoriaService: CategoriaService){}

    @ApiOkResponse({type: CategoriaResponse})
    @Get()
    async index() : Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @ApiOkResponse({type: CategoriaResponse})
    @Post()
    async create(@Body(new ValidationPipe) categoria: CategoriaDTO) : Promise<Categoria> {
        return this.categoriaService.create( categoria);
    }
}
