const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaDoisController = {
    invalidos: async (req, res) => {
        pacote = await db.Produto.findAll(
            {
                where: 
                {   
                    cod_vendedor: '367',
                }
            }
        )
        return res.json({message: 'Pacotes  validos', pacote});
    },

    validos: async (req, res) => {
        pacote = await db.Produto.findAll(
            {
                where: 
                {   
                    cod_vendedor: {[op.notIn]:['367']},
                }
            }
        )
        return res.json({message: 'Pacotes  invalidos', pacote});
    }
}

module.exports = tarefaDoisController;