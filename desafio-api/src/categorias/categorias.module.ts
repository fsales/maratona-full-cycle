import { Module } from '@nestjs/common';
import { CategoriasController } from './controller/categorias.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './models/categoria.entity';
import { CategoriaService } from './service/categoria.service';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Categoria])
  ],
  controllers: [CategoriasController],
  providers: [CategoriaService]
})
export class CategoriasModule {}
