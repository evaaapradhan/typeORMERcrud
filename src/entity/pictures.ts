import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Pictures{
    @PrimaryGeneratedColumn()
    id:Number

    @Column()
    description: string

    @Column()
    url: string

    
    @ManyToOne(()=> User,(user)=> user.pics, {
        eager: true,
        onDelete: 'CASCADE'
    })
    user: User;
   //each photo is owned by a single user, 
   //multiple pictures by one user, many to one
}