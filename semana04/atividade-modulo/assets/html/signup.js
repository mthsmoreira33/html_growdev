//signup.html
function signup() {
  // Armazena valores do signup
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  
  // Valida confirmação de senha
  if (password !== confirmPassword) {
    alert("Senhas não são iguais");
    return;
  }

  // Send email and password to server to check if email already exists
  let users = JSON.parse(localStorage.getItem("users")) || [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("Email already exists");
      return;
    }
  }

  // Add the email and password to local storage
  let user = {
    email: email,
    password: password
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // Redirect to the login page
  window.location.href = "login.html";
}

function login() {
  // Get form values
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === '' || password === '') {
    alert('Por favor inserir email ou senha.');
  } else {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if the email and password match a user in local storage
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        // Redirect to CRUD system page
        window.location.href = "crud.html";
        return;
      }
    }
    // Show error message
    alert("Email or password is incorrect");
  }
}

let dataList = [];

// Check if there is any data in local storage and load it
if (localStorage.getItem("dataList")) {
  dataList = JSON.parse(localStorage.getItem("dataList"));
  renderDataList();
}

// Add a new data to the list
function addData() {
  let input = document.getElementById("input-field");
  let newData = input.value;
  input.value = "";
  dataList.push(newData);
  renderDataList();
  saveDataList();
}

// Remove a data from the list
function removeData(index) {
  dataList.splice(index, 1);
  renderDataList();
  saveDataList();
}

// Update a data in the list
function updateData(index) {
  let newValue = prompt("Enter the new data:");
  dataList[index] = newValue;
  renderDataList();
  saveDataList();
}

// Render the data list on the page
function renderDataList() {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < dataList.length; i++) {
    let data = dataList[i];
    let row = document.createElement("tr");
    let dataCell = document.createElement("td");
    dataCell.innerHTML = data;
    let actionsCell = document.createElement("td");
    let updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.addEventListener("click", function() {
      updateData(i);
    });
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", function() {
      removeData(i);
    });
    actionsCell.appendChild(updateButton);
    actionsCell.appendChild(removeButton);
    row.appendChild(dataCell);
    row.appendChild(actionsCell);
    tableBody.appendChild(row);
  }
}

// Save the data list to local storage
function saveDataList() {
  localStorage.setItem("dataList", JSON.stringify(dataList));
}

// Add event listener to the add button
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addData);

// Add event listener to the input field
let input = document.getElementById("input-field");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    addData();
    }
});


function logout() {
  // Remove login data from session storage
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("password");
  // Redirect to login page or show a message
  window.location.href = "login.html";
};

