var loginBtn = document.querySelector('.login-btn');
console.log(loginBtn);

function validation(username, password, callback) {
    const validUsername = 'admin';
    const validPassword = '12345';
    username == validUsername && password == validPassword ? callback(true) : callback (false);
}

loginBtn.addEventListener('click', () => {
    const username = document.querySelector('#InputEmailLogin').value;
    const password = document.querySelector('#InputPasswordLogin').value;

    validation(username, password, function(validationValue) {
        if(validationValue) {
            window.location.href = "main.html";
        }
        else {
            alert("Invalid username or password!");
        }
    });   
})