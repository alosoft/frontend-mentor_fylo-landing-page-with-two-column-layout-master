const form__button = document.querySelector('form .landing__welcome-start__button');
const form = document.querySelector('.form');
const form2 = document.querySelector('.early__input');
const msg = document.querySelector('.landing__welcome-start__group-msg');
const msg2 = document.querySelector('.early__input-msg');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorLogic(e, msg);

})

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    errorLogic(e, msg2, "white");

})

const errorLogic = (e, msg_element, color) => {
    if (e.target[0].value === "") {
        msg_element.style.color = color ?? 'red';
        msg_element.innerHTML = "Email field is empty";
        return;
    }
    if (!validateEmail(e.target[0].value)) {
        msg_element.style.color = color ?? 'red';
        msg_element.innerHTML = "Please check your email";
        setTimeout(() => {
            msg_element.style.color = 'transparent';
        }, 2500);
    } else {
        e.target.reset();
        msg_element.style.color = color ?? 'green';
        msg_element.innerHTML = "Subscribed successfully";
        setTimeout(() => {
            msg_element.style.color = 'transparent';
        }, 2500);
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};