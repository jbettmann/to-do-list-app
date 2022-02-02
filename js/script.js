
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

