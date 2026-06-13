import { Equipo } from './equipo';

export interface InventarioEquipo {
  idInventario: number;
  equipo: Equipo;
  componente: string;
  valor: string;
  estado: string;
}