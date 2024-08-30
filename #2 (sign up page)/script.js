document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form['confirm-password'].value.trim();
        const gender = form.gender.value.trim();
        const dob = form.dob.value.trim();

        if (username && email && password && confirmPassword && gender && dob) {
            if (password === confirmPassword) {
                formMessage.textContent = 'Account created successfully!';
                formMessage.style.color = '#5bc0de';
                form.reset();
            } else {

                formMessage.textContent = 'Passwords do not match.';
                formMessage.style.color = '#d9534f';
            }
        } else {

            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = '#d9534f';
        }
    });
});
