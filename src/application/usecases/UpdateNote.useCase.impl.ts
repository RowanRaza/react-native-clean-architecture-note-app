import { NoteEntity } from "../../domain/entities/Note.entity";
import { NoteRepository } from "../../domain/repositories/Note.repository";
import { UpdateNote } from "../../domain/useCases/UpdateNote.useCase";

export class UpdateNoteUseCase implements UpdateNote {
    constructor (
        private noteRepo: NoteRepository
    ) {}

    async execute(note: NoteEntity): Promise<NoteEntity> {
        return this.noteRepo.update(note);
    }
}