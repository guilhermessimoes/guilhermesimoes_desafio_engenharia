const db = require('../models');

const tarefaCincoController = {
    enviadosVendedor: async (req, res) => {
        try {
            const { codVendedor } = req.params;
            if (!codVendedor || isNaN(codVendedor)){
                return res.status(400).send("Invalid URL param.")
            }
            pacote = await db.Produto.findAll(
                {
                    where: 
                    {   
                        cod_vendedor: codVendedor,
                    }
                }
            )

            if (pacote == '') {
                return res.json({message: 'Nenhuma pacote encontrado para este vendedor', pacote});
            }
            return res.json({message: 'Listando pacotes por vendedor', pacote});            
        } catch (error) {
            return res.status(error.status || 500).send(error.message || 'Internal Server Error')
        }
        
    }
}

module.exports = tarefaCincoController;