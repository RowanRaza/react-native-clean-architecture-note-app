import { NoteEntity } from "../entities/Note.entity";

export interface NoteRepository {
    create(note: Omit<NoteEntity, 'id' | 'createdAt'>) : Promise<NoteEntity>;
    getAll() : Promise<NoteEntity[]>;
    update(note: NoteEntity) : Promise<NoteEntity>;
    delete(id: string) : Promise<void>;
}