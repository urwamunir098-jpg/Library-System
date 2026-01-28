document.getElementById("membershipForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Invalid email format";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";
});