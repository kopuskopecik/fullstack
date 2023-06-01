const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", postApi);

//api url
// const api_url = "http://localhost:8000/shoppinglists/";
const api_url = "http://ec2-54-174-12-248.compute-1.amazonaws.com:8000/shoppinglists/";

// get data from api 
async function getApi(pUrl) {
  const response = await fetch(pUrl);

  var data = await response.json();
  render(data);
}

// post new item

async function postApi(event) {
  const postShoppingList = getInputData();
  // get api response
  await fetch(api_url, {
    method: "POST",
    body: JSON.stringify(postShoppingList),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  //render data again
  getApi(api_url);
}

// create a object for new item
const getInputData = () => {
  let inputData = document.querySelector("input").value;
  const inputDataAmount = document.querySelector(".amount").value;
  console.log(inputDataAmount);
  let data = {};
  if (inputData.length > 0) {
    let id = Math.floor(new Date());
    data = {
      item: inputData.trim(),
      amount: inputDataAmount,
      completed: false,
    };
  }
  return data;
};

//update item situation
async function updateShoppingList(pId, pTitle, pCompleted) {
  await fetch(`${api_url}${pId}/`, {
    method: "PUT",
    body: JSON.stringify({
      id: pId,
      item: pTitle,
      status: pCompleted == true ? false : true,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  getApi(api_url);
}

//delete item with id

async function deleteShoppingList(pId) {
  await fetch(`${api_url}${pId}/`, {
    method: "DELETE",
  });
  getApi(api_url);
}

// create table for item list
function render(pData) {
  const itemCount=pData.length;
  let inBasket=0;
  let outBasket=0;
  
  const tr = pData
    .map(
      (data, index) => {
        
        data.status ? ++inBasket : ++outBasket;
        
       
        return ` 
      <tr class="${data.status == true ? "text-success" : "text-danger"}">
          <th scope="row">
          ${index + 1}
          </th>

          <td class="text-start">
          ${data.item}
          </td>

          <td>
          ${data.amount}
          </td>
          
          <td>   
          <i type="button" class=" fa-solid ${
            data.status == true
              ? "fa-circle-minus text-danger"
              : "fa-circle-check text-success"
          }" onclick="updateShoppingList(${data.id}, '${data.item}', ${data.status})">
          </i>
          <i type="button" class="text-danger fa-sharp fa-solid fa-trash ms-3" onclick= " deleteShoppingList(${
            data.id
          })">

          </i>
        </td>

      </tr>`}
    )
    .join("");

  let table = `
    <thead class="text-danger">
        <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        ${tr}
    </tbody> 
    <caption class="text-center fs-2 text-success mt-4">Total items : ${itemCount} in basket :  ${inBasket} <span class="text-danger fs-2">out : ${outBasket} </span> </caption>`;

  // Setting innerHTML as table variable
  document.querySelector("#shopping-list-table").innerHTML = table;
}

//render all items
getApi(api_url);
