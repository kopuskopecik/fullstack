import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('EDMG', 'edumago', 'edumago_12', {
  host: '127.0.0.1',
  dialect: 'mysql',
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
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

await sequelize.sync({ force: true });

export { ShoppingList };
