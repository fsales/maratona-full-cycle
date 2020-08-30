import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categoria } from '../models/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriaService {
    constructor(@InjectRepository(Categoria)
        private categoriaRepo: Repository<Categoria>){} 

    async findAll() : Promise<Categoria[]> {
        return await this.categoriaRepo.find();
    }

    async create(categoria: Categoria) : Promise<Categoria> {
        const cat = this.categoriaRepo.create(categoria);
        return await this.categoriaRepo.save(cat);
    }
}
