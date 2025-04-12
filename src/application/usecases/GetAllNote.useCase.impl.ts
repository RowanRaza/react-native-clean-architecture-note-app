import { NoteEntity } from "../../domain/entities/Note.entity";
import { NoteRepository } from "../../domain/repositories/Note.repository";
import { GetAllNote } from "../../domain/useCases/GetAllNote.useCase";

export class GetAllNoteUseCase implements GetAllNote {
    constructor (
        private noteRepo: NoteRepository
    ) {}

    async execute(): Promise<NoteEntity[]> {
        return this.noteRepo.getAll();
    }
}