const form = document.getElementById('form');
const email_input = document.getElementById('email');
const pass_input = document.getElementById('password');
const error_message = document.getElementById('error-message'); // Use the existing error message element

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = getLoginFormErrors(email_input.value, pass_input.value);

    if (errors.length > 0) {
        error_message.innerText = errors.join('. ');
    } else {
        let storedUser = localStorage.getItem(email_input.value);

        if (storedUser) {
            storedUser = JSON.parse(storedUser);

            if (storedUser.password === pass_input.value) {
                alert('Login successful!');
                // Redirect to the dashboard or home page
                window.location.href = 'main.html'; // Example redirect
            } else {
                error_message.innerText = 'Incorrect password';
            }
        } else {
            error_message.innerText = 'No account found with that email';
        }
    }
});

function getLoginFormErrors(email, password) {
    let errors = [];
    if (email == '' || email == null) {
        errors.push('Email field is required');
        email_input.parentElement.classList.add('incorect');
    }
    if (password == '' || password == null) {
        errors.push('Password field is required');
        pass_input.parentElement.classList.add('incorect');
    }
    return errors;
}
