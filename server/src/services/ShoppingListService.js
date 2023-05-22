import * as shoppingListRepository from "../data/ShoppingListRepository.js";

const getShoppingList = async () => {
  const shoppingList = await shoppingListRepository.getShoppingList();
  return shoppingList;
};

const createShoppingList = async (pShoppingList) => {
  return await shoppingListRepository.createShoppingList(pShoppingList);
};

const updateShoppingList = async (pId, pShoppingList) => {
  return await shoppingListRepository.updateShoppingList(pId, pShoppingList);
};

const deleteShoppingList = async (pId) => {
  await shoppingListRepository.deleteShoppingList(pId);
};

export {
  getShoppingList,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList,
};
