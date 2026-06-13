import { OrdenTrabajo } from './orden-trabajo';

export interface Reparacion {
  idReparacion: number;
  orden: OrdenTrabajo;
  procedimiento: string;
  observaciones: string;
}