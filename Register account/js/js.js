function toggleError(input, message, isValid) {
    var error = document.getElementById(input.id + "Error");
    if (isValid) {
        error.style.display = "none";
        input.style.borderColor = "";
    } else {
        error.textContent = message;
        error.style.display = "block";
        input.style.borderColor = "red";
    }
    return isValid;
}

function validateUsername(username) {
    var pattern = /^[a-zA-Z0-9']+$/;
    return toggleError(username, "Invalid username. Only letters, numbers, and apostrophes are allowed.", pattern.test(username.value));
}

function validatePassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    return toggleError(password, "Password must be 8-16 characters, at least 1 uppercase, 1 lowercase, and 1 digit number.", pattern.test(password.value));
}

function validateConfirmPassword(password, confirm_password) {
    return toggleError(confirm_password, "Passwords don't match.", password.value == confirm_password.value);
}

function validateForm(event) {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirmPassword");

    var isUsernameValid = validateUsername(username);
    var isPasswordValid = validatePassword(password);
    var isConfirmPasswordValid = validateConfirmPassword(password, confirm_password);

    if (!isUsernameValid || !isPasswordValid || !isConfirmPasswordValid) {
        event.preventDefault();
    }
}

function resetForm() {
    var form = document.getElementById("registerForm");
    form.reset();

    document.querySelectorAll(".error").forEach(error => (error.style.display = "none"));
    document.querySelectorAll("input").forEach(input => (input.style.borderColor = ""));
}

document.getElementById("registerForm").addEventListener("submit", validateForm);
document.getElementById("cancelButton").addEventListener("click", resetForm);
