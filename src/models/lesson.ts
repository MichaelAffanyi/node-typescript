import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Course} from "./course";


@Entity({
    name: "LESSONS"
})
export class Lesson {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    title: string | undefined;

    @Column()
    duration: string | undefined;

    @Column()
    seqNo: string | undefined;

    @ManyToOne(() => Course, (course) => course.lessons)
    @JoinColumn({name: "courseId"})
    course: Course | undefined;

    @CreateDateColumn()
    createdAt: Date | undefined;

    @UpdateDateColumn()
    updatedAt: Date | undefined;
}