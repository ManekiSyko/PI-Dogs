const { DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Dog', {
    id: {
      type:DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    reference_image_id: {
      type:DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type:DataTypes.STRING,
    },
    weight: {
      type:DataTypes.STRING,
    },
    life_span: {
      type:DataTypes.STRING,
    },
  }, {timestamps: false});
};
