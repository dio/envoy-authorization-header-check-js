const Client = require('./');

(async () => {
  const client = new Client('localhost:3001');
  try {
    const response = await client.check('Basic ok');
    console.log(response.toObject().status.code === 0);
  } catch (err) {
    console.log(err);
  }
})();
