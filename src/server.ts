import express from 'express'; //importamos o express
import { sequelize } from './database';
import { adminJs, adminJsRouter } from './adminjs';
import { router } from './routes';
import cors from 'cors';

const app = express(); //instanciamos o express

app.use(cors()); //permitir as requisições a partir de outras origens

app.use(express.static('public')); //Informamos ao express onde ficar a rota dos arquivos estáticos.

app.use(express.json());

app.use(adminJs.options.rootPath, adminJsRouter); //Mesma coisa que faziamos com o express, app.use(caminho, rotas)

app.use(router);

const PORT = process.env.PORT || 3000; //definimos a porta pelo env.Port ou caso não tenha será 3000

app.listen(PORT, () => { //Iniciamos nossa função de callback
  sequelize.authenticate().then(() => { //chamamos o método authenticate do sequelize
    console.log(`DB Connection sucessfull`) //imprimimos no console caso a conexão com o banco esteja ok
  });
  console.log(`Server started sucessfuly: http://localhost:${PORT}`);
})