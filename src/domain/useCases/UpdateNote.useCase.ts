import { NoteEntity } from "../entities/Note.entity";

export interface UpdateNote {
    execute(note: NoteEntity) : Promise<NoteEntity>
}