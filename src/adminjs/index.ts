import AdminJS from 'adminjs'; //chamamos o AdminJs que iremos utilizar para criação do admin
import AdminJSExpress from '@adminjs/express'; //chamamos o completo do express para adminJS
import AdminJSSEquelize from '@adminjs/sequelize'; //Chamamos o completo do sequelize para adminJS
import { sequelize } from '../database'; //chamamos as configurações que fizemos do banco de dados

AdminJS.registerAdapter(AdminJSSEquelize);

export const adminJs = new AdminJS({ //Instânciamos o adminJS e o exportamos
  databases: [sequelize], //Ma propriedade do databases importamos a instância do Sequelize, notamos que é um array que poderíamos trabalhar com mais de um banco de dados.
  rootPath: '/admin', //É o caminho para nosso Admin
  branding: {
    companyName: 'OneBitFlix',
    logo: '/logoOnebitflix.svg',
    theme: {
      colors: {
        primary100: '#ff0043',
	      primary80: '#ff1a57',
	      primary60: '#ff3369',
	      primary40: '#ff4d7c',
		    primary20: '#ff668f',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
});

//Iremos intânciar novamnete agora o adminJSRouter, pois iremos precisar para incluir as rotas do adminJS lá no nosso app do express, como se fosse um middleware de rotas 
export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)

//Passamos para o buildRouter a intância do adminJs pois ele será responsável por construir as rotas.