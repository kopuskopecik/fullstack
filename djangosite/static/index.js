const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", postApi);

//api url for userID=1
const api_url = "http://localhost:8000/shoppinglists/";

const post_url = "http://localhost:8000/shoppinglists";

// get data from api with userID=1
async function getApi(pUrl) {
  const response = await fetch(pUrl);

  var data = await response.json();
  render(data);
}

// post new todo

async function postApi(event) {
  const postTodo = getInputData();
  // get api response
  await fetch(api_url, {
    method: "POST",
    body: JSON.stringify(postTodo),
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

// create a object for new todo
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

//update todo situation
async function updateTodo(pId, pTitle, pCompleted) {
  await fetch(`http://localhost:8000/shoppinglists/${pId}/`, {
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

//delete todo with id

async function deleteTodo(pId) {
  await fetch(`http://localhost:8000/shoppinglists/${pId}`, {
    method: "DELETE",
  });
  getApi(api_url);
}

// create table for todo list
function render(pData) {
  const tr = pData
    .map(
      (data, index) => ` 
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
          <button type="button" class="btn btn-success" onclick="updateTodo(${
            data.id
          }, '${data.item}', ${data.status})">
              <svg xmlns="http://www.w3.org/2000/svg"
                    width="32" height="32" fill="currentColor" class="bi bi-check-square-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
              </svg>
          </button>
          <button type="button" class="btn btn-danger" onclick= " deleteTodo(${
            data.id
          })">
            <svg xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32" fill="currentColor" class="bi bi-x-square-fill"
                  viewBox="0 0 16 16">
                  <path
                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
              </svg>
          </button>
        </td>

      </tr>`
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
    </tbody>`;

  // Setting innerHTML as table variable
  document.querySelector("#todo-table").innerHTML = table;
}

//render all todo
getApi(api_url);
