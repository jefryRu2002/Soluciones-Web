import { Cliente } from './cliente';

export interface Equipo {
  idEquipo: number;
  cliente: Cliente;
  tipo: string;
  marca: string;
  modelo: string;
  serie: string;
}