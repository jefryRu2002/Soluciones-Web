import { Cliente } from './cliente';

export interface Ticket {
  idTicket: number;
  cliente: Cliente;
  fechaCreacion: Date;
  estado: string;
}