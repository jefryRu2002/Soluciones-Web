import { PersonaModel } from "./PersonaModel";

export interface TecnicoModel extends PersonaModel{
    especialidad: string;
    nivel: string;
    sueldo: number;
}