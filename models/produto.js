module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", 
        {
            codigo_produto: DataTypes.STRING(15),
            origem: DataTypes.STRING(3),
            destino: DataTypes.STRING(3),
            cod_loggi: DataTypes.STRING(3),
            cod_vendedor: DataTypes.STRING(3),
            tipo_produto: DataTypes.STRING(3),
        }, 
        {
            tableName: "produtos",
            timestamps: true,
            paranoid: true
        }
    );
    return Produto
}