const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init(
    {
        id: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: true,
        },
        hours_of_sleep: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        your_mood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rem_sleep: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sleep',
      }
);

module.exports=Sleep;