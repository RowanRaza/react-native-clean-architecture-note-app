export interface DeleteNote {
    execute(id: string) : Promise<void>
}