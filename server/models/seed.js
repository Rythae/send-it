
const queryText = `
INSERT INTO users (
    "firstname", 
    "lastname",
    "othernames", 
    "email", 
    "username", 
    "isAdmin", 
    "password"
    ) 
    VALUES (
    'Olivia', 
    'Smith', 
    'Sheila', 
    'olivess@gmail.com', 
    'olishy', 
     1
    '${bcrypt.hashSync('passkey', 10)}');
`;

const client = new Pool({ connectionString });

client.on('connect', () => {
    console.log('CONNECTED TO DATABASE');
});

client.query(queryText)
  .then(result => console.log(result))
  .catch(error => console.log(error));