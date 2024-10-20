function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = ''; // Clear previous errors

    if (!email || !password) {
        errorDiv.textContent = 'Please fill in all fields.';
        return;
    }
    // Add further validation or login logic here
    alert('Logged in successfully!');
}

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const errorDiv = document.getElementById('registerError');
    errorDiv.textContent = ''; // Clear previous errors

    if (!name || !email || !password) {
        errorDiv.textContent = 'Please fill in all fields.';
        return;
    }
    // Add further validation or registration logic here
    alert('Registered successfully!');
}
