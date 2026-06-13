import { OrdenTrabajo } from './orden-trabajo';

export interface ControlCalidad {
  idControlCalidad: number;
  orden: OrdenTrabajo;
  pruebaFuncionamiento: boolean;
  limpieza: boolean;
  revisionEstetica: boolean;
  resultado: string;
  comentario: string;
}