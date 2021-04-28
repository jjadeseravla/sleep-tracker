const express = require('express');
const router = express.Router();

router.get('/api/hello', (req, res) => {
  res.json('this is working')
});

module.exports = router;
