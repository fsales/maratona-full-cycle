import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    nome: string;

}
