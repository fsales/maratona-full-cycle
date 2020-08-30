import { Controller, Get, Post, Body } from '@nestjs/common';
import { Categoria } from '../models/categoria.entity';
import { CategoriaService } from '../service/categoria.service';

@Controller('categories')
export class CategoriasController {

    constructor(private categoriaService: CategoriaService){}

    @Get()
    async index() : Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Post()
    async create(@Body() categoria: Categoria) : Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }
}
