(() => {

const userFormData = [];

window.onload = () => {
    console.log("document loaded");
};

window.addEventListener('load', () => {
    console.log("Added Listerner");
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Document Content Loaded");
});

const userName = document.querySelector("input[type=text]");
const inputChangeHandler = (event) => {
    console.log(event.target.value);
}

userName.addEventListener("input", inputChangeHandler); // to retrive the input value

// getting the data using the formData constructor
const formElement = document.querySelector("form");
const checkbox = document.querySelector("input[type='checkbox']");
const inputElement = document.querySelector("input[type='text']");

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);

    console.log(formData);
});

// formElement.addEventListener('formdata', (event) => {
//     console.log(event.formdata);
// })

// formElement.addEventListener('keyup', (event) => {
//     console.log('key up called', event.keyCode);
// });

// formElement.addEventListener('keydown', (event) => {
// console.log("keydown called", event.keyCode)
// });

// formElement.addEventListener('keypress', (event) => {
//     console.log("keyPress called", event.keyCode)
// })
checkbox.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log('checked')
});

//event listerner to allow only alphabet value
inputElement.onkeydown = (event) => {
    let keyCode = event.keyCode;
    return (keyCode >= 65 && keyCode <= 90) || keyCode == 32 || keyCode == 8 || keyCode == 46;
};


})();