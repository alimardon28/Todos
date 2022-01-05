let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elName = document.querySelector(".user_name");
let elList = document.querySelector(".list");
let elNameResult = document.querySelector(".userNameResult");
let elHeading = document.querySelector(".main-heading");

let todos = []

elForm.addEventListener('submit' , function(evt){
    evt.preventDefault();

    elHeading.textContent = "Bugungi rejalaringiz marhamat !"

    let inputValue = elInput.value.trim()

    let todo = {
        name:inputValue,
    }

     todos.push(todo);
     elInput.value = null;
     elList.innerHTML = null


     for(let item of todos){
         let newItem = document.createElement('li')
         newItem.textContent = item.name
         elList.appendChild(newItem)
     }



    //User name
    let userNameValue = elName.value;
    elNameResult.textContent = userNameValue;

})