const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaUmController = {
    indentificarRegiao: async (req, res) => {
        try {
            const { destino } = req.params
            if (!destino || isNaN(destino)){
                return res.status(400).send("Invalid URL param.")
            }
            if (destino >= '001' && destino <= '099') {
                origemTotal = await db.Produto.findAndCountAll(
                    {
                        where: 
                        {
                            origem: { 
                                [op.between]: ['001', '099']
                            }
                        }
                    }
                )
                return res.json({message: 'Sudeste', origemTotal});
            }else if(destino >= '100' && destino <= '199'){
                origemTotal = await db.Produto.findAndCountAll(
                    {
                        where: 
                        {
                            origem: { 
                                [op.between]: ['100', '199']
                            }
                        }
                    }
                )
            }else if(destino >= '201' && destino <= '299'){
                origemTotal = await db.Produto.findAndCountAll(
                    {
                        where: 
                        {
                            origem: { 
                                [op.between]: ['201', '299'],
                            }
                        }
                    }
                )
                return res.json({message: 'centroOeste', origemTotal});
            }else if(destino >= '300' && destino <= '399'){
                origemTotal = await db.Produto.findAndCountAll(
                    {
                        where: 
                        {
                            origem: {  
                                [op.between]: ['300', '399']
                            }
                        }
                    }
                )
                return res.json({message: 'nordeste', origemTotal});
            }else if(destino >= '400' && destino <= '499'){
                origemTotal = await db.Produto.findAndCountAll(
                    {
                        where: 
                        {
                            origem: {
                                [op.between]: ['400', '499']
                            }
                        }
                    }
                )
                return res.json({message: 'norte', origemTotal});
            }
        } catch (error) {
            return res.status(error.status || 500).send(error.message || 'Internal Server Error')
        }
        
        
    },
}

module.exports = tarefaUmController;


