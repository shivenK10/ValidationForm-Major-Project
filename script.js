// Function to validate the form inputs
function validateForm() {
    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var valid = true;

    // Full Name validation
    if (fullName.length < 5) {
        document.getElementById("fullNameError").textContent = "Name must be at least 5 characters.";
        document.getElementById("fullNameError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("fullNameError").style.display = "none";
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Phone number validation
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
        document.getElementById("phoneError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // Password validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").style.display = "none";
    }

    return valid;
}

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle("dark-mode");
    // Select elements to apply dark mode styles
    var elements = document.querySelectorAll(".container, label, input[type='text'], input[type='email'], input[type='tel'], input[type='password'], .error, button[type='submit']");
    elements.forEach(function(element) {
        // Toggle dark mode class on each element
        element.classList.toggle("dark-mode");
    });
}
