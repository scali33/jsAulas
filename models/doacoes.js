const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const usuario = require('../controllers/rotas/usuario')
const pet = new require('./pet')
const Usuario = new require('./usuario')
class Doacoes extends Model{}


Doacoes.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_interesse: {
        type: DataTypes.STRING,
        allowNull:false
      },
      data_doacao: {
        type: DataTypes.STRING,
        allowNull:false
      },
      status:{
        type:DataTypes.STRING,
        allowNull:false
      }


},{
    sequelize,
    modelName:'doacoes'
  })
  
  pet.hasMany(Doacoes)
  Doacoes.belongsTo(pet)
  
  Usuario.hasMany(Doacoes)
  Doacoes.belongsTo(Usuario)
  

sequelize.sync()
 module.exports = Doacoes   
