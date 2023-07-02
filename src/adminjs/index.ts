import AdminJS from 'adminjs'; //chamamos o AdminJs que iremos utilizar para criação do admin
import AdminJsExpress from '@adminjs/express'; //chamamos o completo do express para adminJS
import AdminJSSEquelize from '@adminjs/sequelize'; //Chamamos o completo do sequelize para adminJS
import { sequelize } from '../database'; //chamamos as configurações que fizemos do banco de dados
import { adminJsResources } from './resources'; //Importando os recursos para o adminJS
import {locale} from './locale'
import { dashboardOptions } from './dashboard';
import { brandingOptions } from './branding';
import { authtenticationOptions } from './authentication';

AdminJS.registerAdapter(AdminJSSEquelize);

export const adminJs = new AdminJS({ //Instânciamos o adminJS e o exportamos
  databases: [sequelize], //Ma propriedade do databases importamos a instância do Sequelize, notamos que é um array que poderíamos trabalhar com mais de um banco de dados.
  rootPath: '/admin', //É o caminho para nosso Admin
	resources: adminJsResources,
  locale: locale,
  branding: brandingOptions,
  dashboard: dashboardOptions
});

//Iremos intânciar novamnete agora o adminJSRouter, pois iremos precisar para incluir as rotas do adminJS lá no nosso app do express, como se fosse um middleware de rotas 
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null,
  { resave: false, saveUninitialized: false }
)
//Passamos para o buildRouter a intância do adminJs pois ele será responsável por construir as rotas.