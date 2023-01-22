import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tasks{
    @PrimaryGeneratedColumn() id: number
    @Column() task: string
    @Column() active: boolean
    @Column() updated: Date
    @Column() created: Date 
}