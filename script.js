var registeredAccounts = [];

function register() {
    var username = document.getElementById("regUsername").value;
    var password = document.getElementById("regPassword").value;
    var confirmPassword = document.getElementById("regConfirmPassword").value;

    if (password.length < 8 || password.length > 10) {
        document.getElementById("registrationMessage").innerText = "Password must be between 8-10 characters.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("registrationMessage").innerText = "Passwords do not match.";
        return;
    }

    for (var i = 0; i < registeredAccounts.length; i++) {
        if (registeredAccounts[i].username === username) {
            document.getElementById("registrationMessage").innerText = "Username already exists.";
            return;
        }
    }

    registeredAccounts.push({ username: username, password: password });

    document.getElementById("registrationMessage").innerText = "Thank you, " + username + ", for registering.";
}

// I had to research how to get this last section working using W3Schools.

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    var accountExists = false;
    for (var i = 0; i < registeredAccounts.length; i++) {
        if (registeredAccounts[i].username === username) {
            accountExists = true;

            if (username.trim() === '' || password.trim() === '') {
                document.getElementById("loginMessage").innerText = "Please enter both username and password.";
                return;
            }

            if (registeredAccounts[i].password === password) {
                document.getElementById("loginMessage").innerText = "Congratulations! You are logged in.";
                return;
            } else {
                document.getElementById("loginMessage").innerText = "Incorrect password. Please try again.";
                return;
            }
        }
    }

    if (!accountExists) {
        document.getElementById("loginMessage").innerText = "Username does not exist. Please register first.";
    }
}
