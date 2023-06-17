// Login form submission event
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    // Perform login validation and logic here
    // For demo purposes, we'll just display an alert message
    alert("Logged in as: " + username);
  });
  
  // Sign up form submission event
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;
    
    // Perform sign-up validation and logic here
    // For demo purposes, we'll just display an alert message
    alert("Signed up as: " + username);
  });
  