import { NoteRepository } from "../../domain/repositories/Note.repository";
import { DeleteNote } from "../../domain/useCases/DeleteNote.useCase";

export class DeleteNoteUseCase implements DeleteNote {
    constructor (
        private noteRepo: NoteRepository
    ) {}

    async execute(id: string): Promise<void> {
        this.noteRepo.delete(id);
    }
}