var form = document.getElementById("addForm");
var itemList = document.querySelector("#items");

// add item event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var newItem = document.getElementById("item");
  var itemDes = document.getElementById("description");

  if (newItem.value == "" || itemDes.value == "") alert("Enter Valid Details");
  else {
    //create new li item
    var item = document.createElement("li");

    // add classname to li
    item.className = "list-group-item";

    // add input value to the new list
    var textNode = document.createTextNode(newItem.value);
    item.appendChild(textNode);
    item.appendChild(document.createTextNode(" " + itemDes.value));

    // console.log(item);

    // create edit button for each new li item
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-success ml-2 btn-sm float-right editItem";
    editBtn.appendChild(document.createTextNode("EDIT"));
    item.appendChild(editBtn);

    // create delete button for each new li item
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    item.appendChild(deleteBtn);

    // add new li item into ul list
    itemList.appendChild(item);

    // re-setting the form input
    newItem.value = "";
    itemDes.value = "";
  }
});

// remove item event
itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete"))
    if (confirm("Are You Sure?")) itemList.removeChild(e.target.parentElement);
});

// filter event
var filterItem = document.getElementById("filter");
filterItem.addEventListener("keyup", (e) => {
  // convert text to lowercase
  var text = e.target.value.toLowerCase().trim();

  //Get li items
  var items = itemList.getElementsByTagName("li");

  //convert into array form
  var itemArray = Array.from(items);
  //   console.log(itemArray[itemArray.length - 1].textContent);
  itemArray.forEach((e) => {
    // console.log(e.childNodes[1].textContent);
    if (
      e.childNodes[0].textContent.toLowerCase().indexOf(text) == -1 &&
      e.childNodes[1].textContent.toLowerCase().indexOf(text) == -1
    )
      e.style.display = "none";
    else e.style.display = "block";
  });
});
