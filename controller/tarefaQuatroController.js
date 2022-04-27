const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaDezController = {    
    list: async (req, res) => {
        const produtos = await db.Produto.findAll()
        for (let i in produtos) {                             
            let dataResult = produtos[i].dataValues;
            origem = dataResult.codigo_produto.substring(0,3)
            destino = dataResult.codigo_produto.substring(3,6)
            codLoggi = dataResult.codigo_produto.substring(6,9)
            codVendedor = dataResult.codigo_produto.substring(9,12)
            tipoProduto = dataResult.codigo_produto.substring(12,15) 

            if (dataResult.codigo_produto >  0 || dataResult.codigo_produto <= 15 ) {
                if (destino > 201 && destino < 299) {
                    centroOeste = await db.Produto.findAll(
                        {
                            where: 
                            {
                                destino: { [op.between]: ['201', '299'] },
                            }
                        }
                    )
                    return res.json({message: 'Destino do centro-oeste', centroOeste});
                }
                
                if (destino > 300 && destino < 399) {
                    nordeste = await db.Produto.findAll(
                        {
                            where: 
                            {
                                destino: { [op.between]: ['300', '399'] },
                            }
                        }
                    )
                    return res.json({message: 'Destino do Nordeste', nordeste});
                }
                if (destino > 400 && destino < 499) {
                    norte = await db.Produto.findAll(
                        {
                            where: 
                            {
                                destino: { [op.between]: ['400', '499'] },
                            }
                        }
                    )
                    return res.json({message: 'Destino do Nordeste', norte});
                }
                if (destino > 001 && destino < 099) {
                    sudeste = await db.Produto.findAll(
                        {
                            where: 
                            {
                                destino: { [op.between]: ['001', '099'] },
                            }
                        }
                    )
                    return res.json({message: 'Destino do Nordeste', sudeste});
                    
                }
                if (destino > 100 && destino < 199) {
                    sul = await db.Produto.findAll(
                        {
                            where: 
                            {
                                destino: { [op.between]: ['001', '099'] },
                            }
                        }
                    )
                    return res.json({message: 'Destino do Nordeste', sul});
                }
            }
        }
    }
}

module.exports = tarefaDezController;
        
    
