import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'tu-realm',
  clientId: 'tu-app'
});

// Rutas que NO requieren autenticación
const publicPaths = ['/', '/registrarusuario', '/olvidocontrasena'];

export const initKeycloak = () => {
  return keycloak.init({
    onLoad: 'check-sso', // Cambia de 'login-required' a 'check-sso'
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
  }).then((authenticated) => {
    const currentPath = window.location.pathname;
    const isPublicPath = publicPaths.includes(currentPath);
    
    // Solo redirigir a login si NO es ruta pública y NO está autenticado
    if (!isPublicPath && !authenticated) {
      keycloak.login();
    }
    
    return keycloak;
  });
};

export default keycloak;