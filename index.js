const express = require('express');
const app = express();
const PORT = process.env.PORT || 3200;
const fs = require('fs');

app.use(express.static(__dirname));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile('home.html', { root: __dirname });
});

function userExists(email, password) {
  const data = fs.readFileSync('users.txt', 'utf8');
  const users = data.split('\n');
  for (const user of users) {
    const [storedEmail, storedPassword] = user.split(':');
    if (storedEmail === email && storedPassword === password) {
      return true;
    }
  }
  return false;
}

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  // Check if the user already exists
  if (userExists(email, password)) {
    res.status(409).send('User already exists.');
  } else {
    // Add the new user to the data file
    const data = `${email}:${password}\n`;
    fs.appendFileSync('users.txt', data);

    res.status(200).redirect('/login.html');
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
