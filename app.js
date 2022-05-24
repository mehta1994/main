const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 4.1</p>');
=======
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 3.0</p>');
>>>>>>> d1be319255e3da3d774be717907918705d7a4d48
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
