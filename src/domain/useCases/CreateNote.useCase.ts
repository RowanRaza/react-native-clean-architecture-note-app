import { NoteEntity } from "../entities/Note.entity";

export interface CreateNote {
    execute(note: Omit<NoteEntity, 'id' | 'createdAt'>) : Promise<NoteEntity>; 
}