const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const Usuario = new require('./usuario')
class Pet  extends Model{}
Pet.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull:true
      },
      especie: {
        type: DataTypes.STRING,
        allowNull:true
      },
      raca:{
        type: DataTypes.STRING,
        allowNull:true

      },
      peso:{
        type: DataTypes.STRING,
        allowNull:true

      },
      idade:{
       type: DataTypes.STRING,
        allowNull:true
      },
      doenca:{
        type: DataTypes.STRING,
        allowNull:true
      },
      obs:{
        type:DataTypes.STRING,
        allowNull:true
      }



},{
    sequelize,
    modelName:'pet'
  })
  Usuario.hasMany(Pet)
  Pet.belongsTo(Usuario)
sequelize.sync()
 module.exports = Pet   
