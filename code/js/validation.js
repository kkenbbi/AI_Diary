const form = document.getElementById('form');
const firstname_input = document.getElementById('name');
const email_input = document.getElementById('email');
const pass_input = document.getElementById('password');
const repeat_pass_input = document.getElementById('password_confirm');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = getSignupFormErrors(firstname_input.value, email_input.value, pass_input.value, repeat_pass_input.value);

    if (errors.length > 0) {
        error_message.innerText = errors.join('. ');
    } else {
        // Store the user information in localStorage
        localStorage.setItem(email_input.value, JSON.stringify({
            name: firstname_input.value,
            email: email_input.value,
            password: pass_input.value
        }));
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to the login page
    }
});

function getSignupFormErrors(firstname, email, password, password_confirm) {
    let errors = [];
    if (firstname == '' || firstname == null) {
        errors.push('Name field is required');
        firstname_input.parentElement.classList.add('incorect');
    }
    if (email == '' || email == null) {
        errors.push('Email field is required');
        email_input.parentElement.classList.add('incorect');
    }
    if (password == '' || password == null) {
        errors.push('Password field is required');
        pass_input.parentElement.classList.add('incorect');
    }
    if (password != password_confirm) {
        errors.push('Your passwords do not match');
        pass_input.parentElement.classList.add('incorect');
    }
    return errors;
}
