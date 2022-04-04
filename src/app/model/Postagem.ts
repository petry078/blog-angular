import { temas } from "./Temas";
import { User } from "./User";

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public data: string;
    public usuario: User;
    public temas: temas;
}