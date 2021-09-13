'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert( 'categories', [
            { nome: 'Açougue'},
            { nome: 'Frios e laticínios'},
            { nome: 'Adega e bebidas'},
            { nome: 'Higiene e limpeza'},
            { nome: 'Hortifruti e mercearia'},
            { nome: 'Padaria'},
            { nome: 'Enlatados'},
            { nome: 'Cereais'}
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete( 'categories', null, {});
    }
};
