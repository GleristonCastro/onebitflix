import AdminJS from 'adminjs'; //chamamos o AdminJs que iremos utilizar para criação do admin
import AdminJsExpress from '@adminjs/express'; //chamamos o completo do express para adminJS
import AdminJSSEquelize from '@adminjs/sequelize'; //Chamamos o completo do sequelize para adminJS
import { sequelize } from '../database'; //chamamos as configurações que fizemos do banco de dados
import { adminJsResources } from './resources'; //Importando os recursos para o adminJS
import { Category, Course, Episode, User } from '../models';
import bcrypt from 'bcrypt';
import {locale} from './locale'

AdminJS.registerAdapter(AdminJSSEquelize);

export const adminJs = new AdminJS({ //Instânciamos o adminJS e o exportamos
  databases: [sequelize], //Ma propriedade do databases importamos a instância do Sequelize, notamos que é um array que poderíamos trabalhar com mais de um banco de dados.
  rootPath: '/admin', //É o caminho para nosso Admin
	resources: adminJsResources,
  locale: locale,
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
  },
  dashboard: {
    component: AdminJS.bundle('./components/Dashboard'),
		handler: async (req, res, context) => {
      const courses = await Course.count()
      const episodes = await Episode.count()
      const category = await Category.count()
      const standardUsers = await User.count({ where: { role: 'user' } })

      res.json({
        'Cursos': courses,
        'Episódios': episodes,
        'Categorias': category,
        'Usuários': standardUsers
      })
    }
  }
});

//Iremos intânciar novamnete agora o adminJSRouter, pois iremos precisar para incluir as rotas do adminJS lá no nosso app do express, como se fosse um middleware de rotas 
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } })

    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)

      if (matched) {
        return user
      }
    }

    return false
  },
  cookiePassword: 'senha-do-cookie'
}, null, {
	resave: false,
	saveUninitialized: false
})

//Passamos para o buildRouter a intância do adminJs pois ele será responsável por construir as rotas.