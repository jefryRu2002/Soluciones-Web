import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import keycloak from './app/keycloak.config';

keycloak.init
({
  onLoad: 'login-required'
}).then(() =>
{
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
});