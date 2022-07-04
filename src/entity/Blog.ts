import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Blog{
    @PrimaryGeneratedColumn()
    id:Number

    @Column()
    category: string

    @Column()
    title: string

    @Column()
    wordcount: Number
    
    @OneToOne(()=> User,
    {
        eager:true
    })
    @JoinColumn()
    user:User
}
