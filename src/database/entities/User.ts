import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  display_name: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'text' })
  password: string

  @Column({ type: 'text', nullable: true })
  image: string
}
