import { NoteEntity } from "../../../domain/entities/Note.entity";
import { NoteRepository } from "../../../domain/repositories/Note.repository";
import { CreateNoteUseCase } from "../CreateNote.useCase.impl";


describe("CreateNoteUseCase", () => {
  const fakeNote: NoteEntity = {
    id: "123",
    title: "Test Note",
    content: "Ceci est un test",
    createdAt: new Date(),
  };

  const noteRepositoryMock: jest.Mocked<NoteRepository> = {
    create: jest.fn().mockResolvedValue(fakeNote),
    getAll: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const createNoteUseCase = new CreateNoteUseCase(noteRepositoryMock);

  it("devrait appeler le repository et retourner la note créée", async () => {
    const input = {
      title: "Test Note",
      content: "Ceci est un test",
    };

    const result = await createNoteUseCase.execute(input);

    expect(noteRepositoryMock.create).toHaveBeenCalledWith(input);
    expect(result).toEqual(fakeNote);
  });
});
