import { Persona } from './persona';

export interface Tecnico extends Persona {
  especialidad: string;
  nivel: string;
  sueldo: number;
}