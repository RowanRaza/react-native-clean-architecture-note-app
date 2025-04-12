import { NoteEntity } from "../../domain/entities/Note.entity";
import { NoteRepository } from "../../domain/repositories/Note.repository";
import { CreateNote } from "../../domain/useCases/CreateNote.useCase";

export class CreateNoteUseCase implements CreateNote{
    constructor (
        private noteRepo : NoteRepository
    ) {}

    async execute(note: Omit<NoteEntity, "id" | "createdAt">): Promise<NoteEntity> {
        return await this.noteRepo.create(note);
    }
}