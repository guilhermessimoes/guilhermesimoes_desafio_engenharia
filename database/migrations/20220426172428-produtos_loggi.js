'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.createTable('produtos', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo_produto: 
      {
        allowNull: false,
        type: Sequelize.STRING
      },  
      origem: 
      {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      destino: 
      {
        allowNull: false,
        type: Sequelize.STRING
      },
      cod_loggi: 
      {
        allowNull: false,
        type: Sequelize.STRING
      },
      cod_vendedor: 
      {
        allowNull: false,
        type: Sequelize.STRING
      },
      tipo_produto: 
      {
        allowNull: false,
        type: Sequelize.STRING
      },     
      createdAt:{ 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt:{ 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      deletedAt:{ 
        type: Sequelize.DATE,
      }
    });

  },

  async down (queryInterface, Sequelize) {    
    await queryInterface.dropTable('produtos');
  }
};
