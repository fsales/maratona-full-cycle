import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { Categoria } from './categorias/models/categoria.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'categorias',
      entities: [Categoria]
    }),
    CategoriasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
