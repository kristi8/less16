let navigation = document.getElementById ('navbar');
let burgerbar = document.getElementById ('burgerBar');
let burger = document.getElementById ('burgerBar');


burgerbar.addEventListener('click', function() {
    navigation.classList.toggle('activenav')
    burger.classList.toggle('activebar')

})

// 2


let input = document.querySelector('.input-form');
let addButton = document.querySelector('.btn');
let ul = document.querySelector('.ul-items');
let clearall = document.querySelector('clear')

addButton.addEventListener('click' , function(){
    let inputValue = input.value;
    if (inputValue == " "){
        return;
    }
    let li = document.createElement('li');
    let newclean = document.createElement('button');
    newclean.textContent = 'delete';
    newclean.addEventListener('click' , function() {
        li.remove();
    })
    


    li.innerText = inputValue;

    li.appendChild( newclean);
    ul.appendChild(li);
    input.value = ' ';
})
// clearall.addEventListener('click' , function() {
//     ul.innerHTML = " ";
// })
