const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaTresController = {
    list: async (req, res) => {
        origemSulBrinquedo = await db.Produto.findAll(
            {
                where: 
                {                
                    origem: { [op.between]: ['100', '199'] },
                    tipo_produto: '888',
                }
            }
        )

        console.log(typeof origemSulBrinquedo)

        if (origemSulBrinquedo == '') {
            return res.json({message: 'Nenhum pacote encontrado com o produto referente a brinquedos e que vá para a região Sul'});
        }
        return res.json({message: 'Identificar os pacotes que têm como origem a região Sul e Brinquedos em seu conteúdo', origemSulBrinquedo});
    }
}

module.exports = tarefaTresController;