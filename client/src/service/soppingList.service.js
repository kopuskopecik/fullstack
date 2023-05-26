export async function getShoppingList() {
    try {
      const carData = await fetch(`http://localhost:3002/api/v1/shoppingList`);
      return await carData.json();
    } catch (err) {
      console.log("error", err);
    }
  };
  
  export const postSoppingList = async (pValues) => {
    const response = await fetch("http://localhost:3002/api/v1/shoppingList", {
      method: "POST",
      body: JSON.stringify(pValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };