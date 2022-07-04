import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Pictures } from "./pictures"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
 
    @OneToMany(()=> Pictures, (pic)=> pic.user,{ cascade: true}) 
    //cascade: if user deleted then onDelete/onInsert related entity
    pics: Pictures[];
    //user can have multiple pictures, one to many
}
