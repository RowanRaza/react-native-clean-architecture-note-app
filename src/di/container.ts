import { CreateNoteUseCase } from "../application/usecases/CreateNote.useCase.impl"
import { DeleteNoteUseCase } from "../application/usecases/DeleteNote.useCase.impl";
import { GetAllNoteUseCase } from "../application/usecases/GetAllNote.useCase.impl";
import { UpdateNoteUseCase } from "../application/usecases/UpdateNote.useCase.impl";
import { NoteRepositoryImpl } from "../data/repositories/Note.repository.impl"

const NoteRepo = new NoteRepositoryImpl();

const createNoteUseCase = new CreateNoteUseCase(NoteRepo);
const deleteNoteUseCase = new DeleteNoteUseCase(NoteRepo);
const getAllNoteUseCase = new GetAllNoteUseCase(NoteRepo);
const updateNoteUseCase = new UpdateNoteUseCase(NoteRepo);

export const container = {
    createNoteUseCase,
    deleteNoteUseCase,
    getAllNoteUseCase, 
    updateNoteUseCase
}