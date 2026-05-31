export interface Usuario {
  idUsuario: string;   // DNI o identificador
  contrasena: string;
  rol: string;         // 'admin', 'tecnico', 'cliente'
}