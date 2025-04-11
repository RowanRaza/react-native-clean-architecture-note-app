import { NoteEntity } from "../../domain/entities/Note.entity";
import { NoteRepository } from "../../domain/repositories/Note.repository";
import uuid from 'react-native-uuid';
import NoteStorage from "../../infrastructure/storage/Note.storage";

export class NoteRepositoryImpl implements NoteRepository{
    private notes : NoteEntity[] = [];
    constructor() {
        const getNotes = async () => 
            await NoteStorage.getAll()
                .then((notes : NoteEntity[]) => { this.notes = notes })
                .catch((err : Error) => { console.error(err) })
        
        getNotes();
    }

    async create(note: Omit<NoteEntity, "id" | "createdAt">): Promise<NoteEntity> {
        const newNote : NoteEntity = {
            ...note,
            id : uuid.v4().toString(),
            createdAt: new Date()
        };
        this.notes.push(newNote);
        await NoteStorage.save(this.notes)
            .catch((err: Error) => {
                this.notes.pop();
                throw err;
            })
        return newNote;
    }

    async getAll(): Promise<NoteEntity[]> { return this.notes; }

    async update(note: NoteEntity): Promise<NoteEntity> {
        const index = this.notes.findIndex((n) => n.id === note.id);
        if (index !== -1) {
            const updatedNotes : NoteEntity[] = [...this.notes];
            updatedNotes[index] = note;
            await NoteStorage.save(updatedNotes)
                .then(() => {
                    this.notes = [...updatedNotes];
                })
                .catch((err : Error) => {
                    throw err;
                })
        }
        return note;
    }

    async delete(id: string): Promise<void> {
        const updatedNotes = this.notes.filter((note) => note.id !== id);
        await NoteStorage.save(updatedNotes)
            .then(() => {
                this.notes = [...updatedNotes];
            })
            .catch((err: Error) => {
                throw err;
            })
    }
}