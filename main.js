var form = document.getElementById("addForm");
var itemList = document.querySelector("#items");

form.addEventListener("submit", addItem);

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete"))
    if (confirm("Are You Sure?")) itemList.removeChild(e.target.parentElement);
});

//
function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("item");

  if (newItem.value == "") alert("Enter Valid Details");
  else {
    //create new li item
    var item = document.createElement("li");

    // add classname to li
    item.className = "list-group-item";
    //console.log(item);

    // add input value to the new list
    var textNode = document.createTextNode(newItem.value);
    item.appendChild(textNode);

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
  }
}
