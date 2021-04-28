/**
 * Get port from environment and store in Express.
 */
const app = require('../main/app.js');

const port = (process.env.PORT || '5000');
app.set('port', port);

app.listen(port, () => console.log(`listening port ${port}`));
