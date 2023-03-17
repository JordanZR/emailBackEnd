var app = require('../index')

const email = require('../controllers/emailController')

app.get('/email', email.send)