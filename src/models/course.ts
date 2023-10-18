import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Lesson} from "./lesson";


@Entity({
    name: "COURSES"
})
export class Course {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    seqNo: number | undefined;

    @Column()
    title: string | undefined;

    @Column()
    iconUrl: string | undefined;

    @Column()
    longDescription: string | undefined;

    @Column()
    category: string | undefined;

    @OneToMany(() => Lesson, lesson => lesson.course)
    lessons: Lesson[] | undefined;

    @CreateDateColumn()
    createdAt: Date | undefined;

    @UpdateDateColumn()
    updatedAt: Date | undefined;
}