import { OrdenTrabajo } from './orden-trabajo';

export interface Diagnostico {
  idDiagnostico: number;
  orden: OrdenTrabajo;
  resultado: string;
  detalleTecnico: string;
}