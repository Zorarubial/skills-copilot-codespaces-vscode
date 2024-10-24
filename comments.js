//create web server
const express = require('express');
const app = express();
const path = require('path');

//use ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use static files
app.use(express.static(path.join(__dirname, 'public')));

//use body parser
app.use(express.urlencoded({ extended: true }));

//use comments
const comments = [
  {
    username: 'Todd',
    comment: 'lol that is so funny!'
  },
  {
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog'
  },
  {
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd'
  },
  {
    username: 'onlysayswoof',
    comment: 'woof woof woof'
  }
]

//get request
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

//post request
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});

//listen to port
app.listen(3000, () => {
  console.log('On port 3000');
});
