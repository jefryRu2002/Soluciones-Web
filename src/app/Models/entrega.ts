import { OrdenTrabajo } from './orden-trabajo';

export interface Entrega {
  idEntrega: number;
  orden: OrdenTrabajo;
  fechaEntrega: Date;
  recibidoPor: string;
}