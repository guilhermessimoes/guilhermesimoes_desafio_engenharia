const db = require('../models');
const Sequelize = require('sequelize')
const op = Sequelize.Op;

const tarefaSeteController = {
    destinoNorte: async (req, res) => {
        try {
            const {destino} = req.params
            if (!destino || isNaN(destino)){
                return res.status(400).send("Invalid URL param.")
            }

            if (destino >= '400' && destino <= '499') {
                destinoNorte = await db.Produto.findAll(
                    {
                        where: 
                        {
                            destino: { [op.between]: ['201', '299'], [op.between]: ['400', '499'] }
                        }
                    }
                )
                return res.json({message: 'Todos os pacotes que vao para o norte e que passam no centro oeste.', destinoNorte});
            }
            
            return res.json({message: 'Nenhum pacote encontrado que vai para o norte e passa no centro-oeste'});     
        } catch (error) {
            return res.status(error.status || 500).send(error.message || 'Internal Server Error')
        }
        
    }
}

module.exports = tarefaSeteController;