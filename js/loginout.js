// ... (your existing code) ...

function logout(e) {
    localStorage.removeItem("login"); // Remove login status from localStorage
    e.style.display='none';
    alert("Logout Succesful");

}

function login() {
    event.preventDefault(); // Prevent form submission and page refresh
    
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;

    fetch("users.txt")
        .then(response => response.text())
        .then(data => {
            const usersArray = data.split("\r\n");
            usersArray.pop();
    
            const credentials = usersArray.map(user => user.split(":"));
            
            const foundUser = credentials.find(([storedUsername, storedPassword]) => {
                return username === storedUsername && password === storedPassword;
            });
            console.log(credentials);
            if (foundUser) {
                localStorage.setItem("login", "true"); // Set login status in localStorage
                // shwobtnhandle();
                alert("login sucessful")
                history.back();
            } else {
                // Handle failed authentication
                alert("wrong details");
                alert(username+password);
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
}


