import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    // OneToMany => 1: função que retorna model a ser relacionada; 2: função que retorna o relacionamento inverso
    // JoinColumn: qual é o nome da chave estrangeira? (Deve ser colocado na model dona da relação)
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}