let loginContainer = document.getElementById('login-container');
let signupContainer = document.getElementById('signup-container');
let logInlink = document.getElementById('show-login');
let signUplink = document.getElementById('show-signup');

const showSignUp = () => {
    loginContainer.style.opacity = '0';
    setTimeout(() => {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
        signupContainer.style.opacity = '1';
    }, 300);
};

signUplink.addEventListener('click', (e) => {
    e.preventDefault();
    showSignUp();
});

const showLogin = () => {
    signupContainer.style.opacity = '0';
    setTimeout(() => {
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        loginContainer.style.opacity = '1';
    }, 300);
};

logInlink.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});



