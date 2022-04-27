const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaOitoController = {
    fila: async (req, res) => {
        try {
            const { destino } = req.params
            if (!destino || isNaN(destino)){
                return res.status(400).send("Invalid URL param.")
            }

            if (destino >= '400' && destino <= '499') {
                fila = await db.Produto.findAll(
                    {
                        where: 
                        {
                            destino: { [op.between]: ['201', '299'] }
                        }
                    }
                )
                return res.json({message: 'Todo(s) esse(s) produto(s) precisam ser descarregados primeiro.', fila});
            }
            
            return res.json({message: 'Nenhum na fila'});     
        } catch (error) {
            return res.status(error.status || 500).send(error.message || 'Internal Server Error')
        }
        
    }
}

module.exports = tarefaOitoController;