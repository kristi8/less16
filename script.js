let navigation = document.getElementById ('navbar');
let burgerbar = document.getElementById ('burgerBar');
let burger = document.getElementById ('burgerBar');


burgerbar.addEventListener('click', function() {
    navigation.classList.toggle('activenav')
    burger.classList.toggle('activebar')

})
