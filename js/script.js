
function newItem() {
//javascript=====================================================================
//1. Adding a new item to the list of items:
   // let li = document.createElement("li");
   // let inputValue = document.getElementById("input").value;
   // let text = document.createTextNode(inputValue);
   // li.appendChild(text);
   //
   // if (inputValue === '') {
   //   alert("You must write something!");
   // } else {
   //   let list = document.querySelector('#list');
   //   list.appendChild(li);
   // }


// Below code excutes the code listed above but in jQuery syntex
  // creates <li> tag
  let li = $('<li></li>');
  // assigns value of input to inputValue variable
  let inputValue = $('input').val();
  li.append(inputValue);

  // alerts user if input area is empty.
  if (inputValue === '') {
     alert("You must write something!");
  } else {
    // asigns the id="list" to li variable (<li></li> tags)
    $('#list').append(li);
  };

//javascript=====================================================================
 //2. Crossing out an item from the list of items:
  //  function crossOut() {
 	// 	li.classList.toggle("strike");
 	// }
  //
 	// li.addEventListener("dblclick",crossOut);

// Below code excutes the code listed above but in jQuery syntex
// function that toggles(switches) between adding and removing class='strike'
// from li which puts a line throught it from CSS styling
function crossOut() {
  li.toggleClass('strike');
}
//event listener for double click to cross out li item
li.on('dblclick', crossOut);

//javascript=====================================================================
 //3(i). Adding the delete button "X":
  //  let crossOutButton = document.createElement("crossOutButton");
 	// crossOutButton.appendChild(document.createTextNode("X"));
 	// li.appendChild(crossOutButton);
  // crossOutButton.addEventListener("click", deleteListItem);

// Below code excutes the code listed above but in jQuery syntex.
//creates and sets crossOutButton element.
let crossOutButton = $('<crossOutButton></crossOutButton>');
// appends(attaches) new text node with a value of 'X' to crossOutButton above
crossOutButton.append(document.createTextNode('X'));
//appends(attaches) crossOutButton to li
li.append(crossOutButton);

// adds event listner of 'click' to crossOutButton and if event happens, executes deleteListItem
crossOutButton.on('click', deleteListItem);


//javascript=====================================================================
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  //  function deleteListItem(){
 	// 	li.classList.add("delete")
 	// }

// Below code excutes the code listed above but in jQuery syntex.
// function that deletes item from list by assiging it a class='delete'.
// delete class has a display: none; in style.css
function deleteListItem() {
  li.addClass('delete')
}
 // 4. Reordering the items:
   $('#list').sortable();
}
