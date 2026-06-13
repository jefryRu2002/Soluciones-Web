import { OrdenTrabajo } from './orden-trabajo';

export interface Cotizacion {
  idCotizacion: number;
  orden: OrdenTrabajo;
  costoRepuestos: number;
  manoObra: number;
  total: number;
  descripcion: string;
}