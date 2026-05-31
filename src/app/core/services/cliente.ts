import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  idPersona: string;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
}

export interface Solicitud {
  idTicket: number;
  estado: string;
  fechaCreacion: Date;
  equipo?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Obtener cliente por ID
  getCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/clientes/${id}`);
  }

  // Obtener tickets del cliente
  getTicketsByCliente(clienteId: string): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.apiUrl}/tickets/cliente/${clienteId}`);
  }
}