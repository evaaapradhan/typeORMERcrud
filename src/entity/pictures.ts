// import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
// import { User } from './User'
// import { Blog} from './Blog'

// @Entity()
// export class Pictures{
//     @PrimaryGeneratedColumn()
//     id:Number

//     @Column()
//     category: string

//     @Column()
//     title: string

//     @Column()
//     wordcount: Number
    
//     @ManyToOne(()=> User,(users)=> users.blogss)
//     userss: User
//     {
//         eager:true
//     })
//     @JoinColumn()
//     user:User
// }