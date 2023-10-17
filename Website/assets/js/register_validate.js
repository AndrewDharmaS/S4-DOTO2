function validation(event) {
    let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
    let region = document.getElementById("region").value;
    let dob = document.getElementById("dob").value;
    let error = document.getElementById("error");
    if (username == "") {
        error.innerHTML = "Please enter your username."
    } else if (email == "") {
        error.innerHTML = "Please enter your email.";
    } else if (password == "") {
        error.innerHTML = "Please enter your password.";
    } else if (region == "") {
        error.innerHTML = "Please enter your region.";
    } else if (dob == "") {
        error.innerHTML = "Please enter your date of birth.";
    } else if (username.length < 4) {
        error.innerHTML = "Username length must at least 4 characters.";
    } else if (password.length < 4) {
        error.innerHTML = "Password length must at least 4 characters."
    } else if (checkPassword(password)) {
        error.innerHTML = "Password must Alphanumeric.";
    } else if (email.indexOf("@") < 1) {
        error.innerHTML = "Character '@' can't be used as the first character of the email.";
    } else if (email.indexOf(".") < email.indexOf("@") + 2) {
        error.innerHTML = "Character '.' can't be used after '@' sign.";
    } else if (email.indexOf(".") === email.length - 1) {
        error.innerHTML = "Character '.' can't be used at the end of the email.";
    } else {
        alert("Register Successful");
        return true;
    }
    event.preventDefault();
}

function checkPassword(pwd) {
    if (isNaN(pwd)) {
        for (let i = 0; i < 10; i++) {
            if (pwd.includes(i)) return false;
        }
    }
    return true;
}