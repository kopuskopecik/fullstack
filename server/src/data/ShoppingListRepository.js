import { ShoppingList } from "../commons/sequelize.js";

const getShoppingList = async () => {
  try {
    return await ShoppingList.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createShoppingList = async (pShoppingList) => {
  try {
    return await ShoppingList.create(pShoppingList);
  } catch (error) {
    console.log(error);
  }
};

const updateShoppingList = async (pId, pShoppingList) => {
  try {
    let shoppingList = await ShoppingList.findByPk(pId);
    shoppingList.set({
      item: pShoppingList.item,
      amount: pShoppingList.amount,
    });
    return await shoppingList.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteShoppingList = async (pId) => {
  try {
    await ShoppingList.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getShoppingList,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList,
};
