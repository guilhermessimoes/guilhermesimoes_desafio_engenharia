const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaDezController = {
    listaInvalidos: async (req, res) => {
        try {
            list = await db.Produto.findAll(
                {
                    where: 
                    {                    
                        tipo_produto: {[op.notIn]:['001','111','333','555', '888']}
                    }
                }
            )    
            return res.status(200).json({message: 'Listando os invalidos', list})
            
        } catch (error) {
            return res.status(error.status || 500).send(error.message || 'Internal Server Error')
        }
        
    }
}

module.exports = tarefaDezController;


