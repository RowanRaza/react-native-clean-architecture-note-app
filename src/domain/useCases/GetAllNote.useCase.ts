import { NoteEntity } from "../entities/Note.entity";

export interface GetAllNote {
    execute() : Promise<NoteEntity[]>
}