document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()
    var username = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();

    var usernameError = document.getElementById("nameerror");
    var emailError = document.getElementById("emailerror");

    usernameError.textContent = '';
    emailError.textContent = '';

    var isValid = true;

    // Username validation

    if (username === "") {
        usernameError.textContent = "Must have a username";   
        isValid = false;
    }
    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email ==="") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }
    if (!isValid) {
        return;
    }

    alert("Form submitted successfully!");
    document.getElementById("form").reset();

});


