

// change icon event function 
function changeIcon(obj) {
    var parent = obj.parentElement;
    var circleElement = parent.parentElement.parentElement.firstElementChild;
    var imgElement = circleElement.firstElementChild

    if (obj.classList.contains('color-1')) {
        circleElement.style.backgroundColor = 'var(--yellow-color)';
        // Perform actions when obj has class name color-1
        // circle.style.backgroundColor=obj.style.color;
        parent.innerHTML = `  
        <i onclick="changeIcon(this)"class="fa-regular fa-circle rounded-circle hover-color-1 m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-2 m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-3 rounded-circle m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-4 m-1"></i>
        `
        imgElement.innerHTML = `  <img class="img-fluid" src="images/popular-1.svg" alt="planner">`
    } else if (obj.classList.contains('color-2')) {
        // Perform actions when obj has class name color-1
        circleElement.style.backgroundColor = 'var(--purple-color)';
        parent.innerHTML = `  
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-1 m-1"></i>
        <i onclick="changeIcon(this)" class="fa-regular fa-circle rounded-circle hover-color-2 m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-3 rounded-circle m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-4 m-1"></i>
        `
        imgElement.innerHTML = `  <img class="img-fluid" src="images/popular-2.svg" alt="planner">`
    } else if (obj.classList.contains('color-3')) {
        // Perform actions when obj has class name color-1
        circleElement.style.backgroundColor = 'var(--white-color)';
        parent.innerHTML = `  
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-1 m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-2 m-1"></i>
        <i onclick="changeIcon(this)" class="fa-regular fa-circle rounded-circle hover-color-3 m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-4 m-1"></i>
        `
        imgElement.innerHTML = `  <img class="img-fluid" src="images/popular-2.svg" alt="planner">`
    } else if (obj.classList.contains('color-4')) {
        // Perform actions when obj has class name color-1
        circleElement.style.backgroundColor = 'var(--green-color)';

        parent.innerHTML = `  
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-1 m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-2 rounded-circle m-1"></i>
        <i onclick="changeIcon(this)"class="fa-solid fa-circle color-3 m-1"></i>
        <i onclick="changeIcon(this)" class="fa-regular fa-circle rounded-circle hover-color-4 m-1"></i>
        `
        imgElement.innerHTML = `  <img class="img-fluid" src="images/popular-3.svg" alt="planner">`
    } else {
        console.log('cant change icon');
    }
}

function changeHeart(obj) {
    var parent = obj.parentElement;
    if (obj.classList.contains('regular')) {
        parent.innerHTML = `<i onclick="changeHeart(this)" class="fa-solid solid-heart fa-heart"></i>`
    } else if (obj.classList.contains('solid-heart'))
        parent.innerHTML = `<i onclick="changeHeart(this)" class="fa-regular regular fa-heart"></i>`
}




function changeNav(obj, id) {
    obj.src = `images/${id}-hover.svg`
}
function changeNavDef(obj, id) {
    obj.src = `images/${id}.svg`
}

document.documentElement.style.setProperty('--hovered-color', '#fff');

var cartBox = document.getElementById('cart-box');
var i = 1
function addItem(obj) {
    cartBox.setAttribute('cart-number', `${i}`);
    i++
    document.documentElement.style.setProperty('--hovered-color', '#C85ED7');
}




