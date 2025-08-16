let button = document.createElement('button');
button.innerText = 'Click Me';

button.style.backgroundColor = 'red';
button.style.color = 'white';

let bodytag = document.querySelector('body');
bodytag.prepend(button);

console.log(button);
