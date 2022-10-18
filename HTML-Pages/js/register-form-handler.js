(() => {
    const registerData = [];
    const firstNameElement = document.getElementById('fname');
    const lastNameElement = document.getElementById('lname');
    const emailElement = document.getElementById('userEmail');
    const passwordElement = document.getElementById('userPassword');
    const confirmPasswordElement = document.getElementById('confirmPassword');
    const formElement = document.getElementById('register-form');

    // defining the regular expression pattern
    const nameRegrexPattern =  /^[a-zA-Z ]{2,30}$/;


    //validating the input field when user enter the data
    firstNameElement.addEventListener('blur', (event) => {
        let firstName = event.target.value;
        if(!nameRegrexPattern.test(firstName)) {
            firstNameElement.className = "invalid touched";
        } else {
            firstNameElement.classList.remove("invalid");
        }
    });

    lastNameElement.addEventListener('blur', (event) => {
        let lastName = event.target.value;
        if(!nameRegrexPattern.test(lastName)) {
            lastNameElement.className = "invalid touched";
        } else {
            firstNameElement.classList.remove("invalid");
        }
    });

    emailElement.addEventListener('blur', (event) => {

    });

    //handling the form data while clicking on the submit button
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const userDataObject = {};
        const formData = new FormData(formElement);
        for(const [key, value] of formData) {
            userDataObject[key] = value.trim();
        }
        registerData.push(userDataObject);
        console.log(registerData);
    });

    // formElement.onsubmit = (event) => {
    //     event.preventDefault();
    //     const userDataObject = {};
    //     const formData = new FormData(formElement);
    //     for(const [key, value] of formData) {
    //         userDataObject[key] = value;
    //     }
    //     registerData.push(userDataObject);
    //     console.log(registerData);
    // }
})();