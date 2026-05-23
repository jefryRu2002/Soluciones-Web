import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({

  url: 'http://localhost:8080',

  realm: 'mi-realm',

  clientId: 'frontend-angular'

});

export default keycloak;