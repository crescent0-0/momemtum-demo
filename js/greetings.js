const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e) {
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            onLoginSubmit();
        }
    });
} else {
    paintGreetings(savedUserName);
}