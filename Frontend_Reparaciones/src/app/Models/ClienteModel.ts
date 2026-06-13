import { PersonaModel } from "./PersonaModel";

export interface ClienteModel extends PersonaModel{
    direccion: string;
}