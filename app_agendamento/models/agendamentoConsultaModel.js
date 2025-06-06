const Sequelize = require('sequelize');
const db = require('../db')

const AgendamentoConsulta = db.define('agendamento_consulta', {
    id: {
        type: Sequelize.INTEGER,
        auto_Incremented: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },

    nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },

    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },

    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },

    clinica: {
        type: Sequelize.STRING,
        allowNull: false
    },

    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },

    data: {
        type: Sequelize.DATE,
        allowNull: false
    },

    hora: {
        type: Sequelize.STRING,
        allowNull: false
    },

    observacao: {
        type: Sequelize.STRING,
    }
})

module.exports =  AgendamentoConsulta

