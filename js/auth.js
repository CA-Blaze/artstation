// auth.js

// Check if the user is logged in
if (localStorage.getItem("login") === "true") {
    // User is logged in, do nothing
} else {
    // User is not logged in, redirect to login page
    window.location.href = "login.html";
}
