document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !email || !password) {
        alert('All fields are required.');
        return;
    }
    
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);
    alert('Registration successful!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    if (!username || !password) {
        alert('All fields are required.');
        return;
    }
    
    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');
    
    if (username === registeredUsername && password === registeredPassword) {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password.');
    }
});



