const port = 3000;
const socket = io.connect('http://localhost:' + port);
const chat = document.getElementById('note');

const writeLine = (text) => {
  const line = document.createElement('div');
  line.innerHTML = `<p>${text}</p>`;
  chat.appendChild(line);
};

socket.on('userName', function (userName) {
  console.log("You'r username is => " + userName);
  writeLine(`You'r username is ${userName}`);
});

socket.on('newUser', function (userName) {
  console.log('New user has been connected | ' + userName);
  writeLine(`${userName} has been connected`);
});

socket.on('createProduct', function (body) {
  console.log(`New product has been created ${JSON.stringify(body)}`);
  writeLine(`New product has been created ${JSON.stringify(body)}`);
});

socket.on('editProduct', function (id, body) {
  console.log(`product with ID ${id} has been changed ${JSON.stringify(body)}`);
  writeLine(`product with ID ${id} has been changed ${JSON.stringify(body)}`);
});

socket.on('deleteProduct', function (id) {
  console.log(`product with ID ${id} has been deleted`);
  writeLine(`product with ID ${id} has been deleted`);
});
