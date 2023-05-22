import { Sequelize, DataTypes } from "sequelize";
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

//models

const ShoppingList = sequelize.define("ShoppingList", {
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

await sequelize.sync({ force: true });

export { ShoppingList };
