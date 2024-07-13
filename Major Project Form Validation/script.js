function validateForm() {
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
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
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

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var elements = document.querySelectorAll(".container, label, input[type='text'], input[type='email'], input[type='tel'], input[type='password'], .error, button[type='submit']");
    elements.forEach(function(element) {
        element.classList.toggle("dark-mode");
    });
}
