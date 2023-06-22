const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Usuario extends Model{}
Usuario.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull:true,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      telefone:{
        type:DataTypes.STRING,
        allowNull:true,
      },
      zap:{
       type: DataTypes.STRING,
        allowNull:true,
      },
      email:{
        type:DataTypes.STRING,
        allowNull:true,
      }

},{
    sequelize,
    modelName:'usuario'
  })
sequelize.sync()
 module.exports = Usuario   
