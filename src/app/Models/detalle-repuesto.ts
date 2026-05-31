import { Reparacion } from './reparacion';
import { Repuesto } from './repuesto';

export interface DetalleRepuesto {
  idDetalleRepuesto: number;
  reparacion: Reparacion;
  repuesto: Repuesto;
  cantidad: number;
}