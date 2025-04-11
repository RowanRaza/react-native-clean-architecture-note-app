import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteEntity } from "../../domain/entities/Note.entity";

export default class NoteStorage {
    private static storageKey = '@notes';

    public static async getAll() : Promise<NoteEntity[]> {
        await AsyncStorage.getItem(this.storageKey)
            .then((notes: string | null) => {
                return (notes)? JSON.parse(notes) : []
            })
            .catch((err : Error) => 
                console.error(err)
            )

        return [];
    }

    public static async save(notes: NoteEntity[]) : Promise<void> {
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(notes))
            .catch((err: Error) => {throw err})
    }
}