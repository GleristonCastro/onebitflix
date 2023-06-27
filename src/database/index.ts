import { Sequelize } from "sequelize"; //Chamamos o Squelize

export const sequelize = new Sequelize({ //Instanciamos a nova classe e adicionamos as configurações padrões.
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'onebitflix',
  password: 'onebitflix',
  define: {
    underscored: true //Se não utilizarmos o underscored o sequelize não vai fazer nada, mas se quizermos fazer com que o sequelize converta automaticamente para a gente de snake_case no banco de dados para camelCase, vai retornar sempre camelCase. Facilita que passamos a seguir os padrões do JavaScript.
  }
})