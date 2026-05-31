import { Ticket } from './ticket';
import { Equipo } from './equipo';
import { Problema } from './problema';
import { Tecnico } from './tecnico';

export interface OrdenTrabajo {
  idOrden: number;
  ticket: Ticket;
  equipo: Equipo;
  problema: Problema;
  tecnico: Tecnico;
  fechaIngreso: Date;
  estado: string;
}