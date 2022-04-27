const db = require('../models');

const tarefaSeisController = {
    gerarRelatorio: async (req, res) => {
        try {
            const {tipoProduto, destino } = req.params
            if (!tipoProduto || isNaN(tipoProduto) || !destino || isNaN(destino)){
                return res.status(400).send("Invalid URL param.")
            }
            relatorio = await db.Produto.findAll(
                {
                    where: 
                    {
                        tipo_produto: tipoProduto,
                        destino
                    }
                }
            )
            if (relatorio == '') {
                return res.json({message: 'Nenhum relatorio gerado com esse produto e destino', relatorio});
            }
            return res.json({message: 'Relatorio Gerado com sucesso', relatorio});     
        } catch (error) {
            return res.status(error.status || 500).send(error.message || 'Internal Server Error')
        }
        
    }
}

module.exports = tarefaSeisController;