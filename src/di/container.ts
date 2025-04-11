import { CreateNoteUseCase } from "../application/usecases/CreateNote.useCase.impl"
import { NoteRepositoryImpl } from "../data/repositories/Note.repository.impl"
const NoteRepo = new NoteRepositoryImpl();
const createNoteUseCase = new CreateNoteUseCase(NoteRepo)
export const container = {
    createNoteUseCase,
}