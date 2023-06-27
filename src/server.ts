import express from 'express'; //importamos o express
import { sequelize } from './database';

const app = express(); //instanciamos o express

const PORT = process.env.PORT || 3000; //definimos a porta pelo env.Port ou caso não tenha será 3000

app.listen(PORT, () => { //Iniciamos nossa função de callback
  sequelize.authenticate().then(() => { //chamamos o método authenticate do sequelize
    console.log(`DB Connection sucessfull`) //imprimimos no console caso a conexão com o banco esteja ok
  });
  console.log(`Server started sucessfuly: http://localhost/:${PORT}`);
})

