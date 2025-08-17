//#btn1 indicates that an id called btn1 is used
let btn1 = document.querySelector('#btn1');
let curr = "light";
btn1.addEventListener('click', function() {
    if(curr === "light") {
        curr = "dark";
        console.log('changing to dark mode');
        document.body.style.backgroundColor = "grey";
    }
    else {
        curr = "light";
        console.log('changing to light mode');
        document.body.style.backgroundColor = "white";
    }
});
