// SignIn Or Register Not Valid Code
// Variables
let form = document.querySelector('form');
let errorMessage = document.querySelector('.error-message');
let forgetPassword = document.querySelector('.forget-password');
let clicked = false;

// Functions
function apperNotValidMessage () {
    if (!clicked) {
        errorMessage.style.cssText = 'opacity: 1; top: 0;';
        clicked = true;
    }
    return null;
}

// Event Listeners
form.onsubmit = (e) => {
    e.preventDefault()
    apperNotValidMessage()
}

forgetPassword && forgetPassword.addEventListener('click', apperNotValidMessage)

// Apper Or Disapper Password Code

// Function
function togglePassword (inputSelector, openSelector, offSelector) {
    // Variables
    const input = document.querySelector(inputSelector);
    const openEye = document.querySelector(openSelector);
    const offEye = document.querySelector(offSelector);

    if (!input || !openEye || !offEye) return;

    const toggle = (show) => {
        input.type = show ? 'text' : 'password';
        openEye.style.display = show ? 'inline-block' : 'none';
        offEye.style.display = show ? 'none' : 'inline-block';
    };
    openEye.onclick = () => toggle(false);
    offEye.onclick = () => toggle(true);
}

// password
togglePassword(
    'input[name="password"]',
    '.eye-open',
    '.eye-off'
);

// check password
togglePassword(
    'input[name="check-password"]',
    '.check-eye-open',
    '.check-eye-off'
);