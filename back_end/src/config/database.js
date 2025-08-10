const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'user', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
}) // Substituir pelas informações verdadeiras do banco, quando tiver as mesmas.

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o MySQL foi bem-sucedida!');
    } catch (error) {
        console.error('Erro na conexão com o MySQL:', error);
    }
}

connectDB();

module.exports = sequelize;