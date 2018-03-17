const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json  ({
      data: "Hello world",
  });
});

   router.get ('/about', (req, res) => {
      res.json({
     
    


      name: 'forum=app',
      version: '0.1.0',
   });
});

module.exports = router;
