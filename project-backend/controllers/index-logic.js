const mongoose = require('mongoose');
const User = require('./user-schema');

const db = mongoose.connection;

const CONTACTS = [
  { id: 1, name: 'ssf', value: 'AAAAAAAAAAAf' }
];

const users = [
  new User({
    name: 'Name', email: 'test@test.com', password: 'Pass', progress: [1, 2]
  }),
  new User({
    name: 'Name2', email: 'test@test.com', password: 'Pass2', progress: []
  })
];

const getContacts = (req, res) => {
  // db.dropDatabase();
  // users.forEach(user => user.save(function(err) {
  //   console.log(err);
  // }));

  // User.findById('6002daf1f5664a2b2498a3bc', function(err, res) {
  //   if(err) return console.log(err);
  //   console.log(res);
  //   const progressArr = res.progress;
  //   progressArr.push(3);

  //   User.updateOne({_id: '6002daf1f5664a2b2498a3bc'}, {progress: progressArr}, function(err) {
  //     if(err) return console.log(err);
  //   });
  // });

  // User.find({}, function(err, docs){
  //   if(err) return console.log(err);
  //   console.log('sfd', docs);
  // });

  res.json(CONTACTS);
};

const postContacts = (req, res) => {
  const contact = { ...req.body, test: 1 };
  CONTACTS.push(contact);
  res.status(201).json(contact);
};

const deleteContacts = (req, res) => {
  // do delete
  const { id } = req.params;

  res.json({ message: `Контакт был удален, ${id}` });
};

const putContacts = (req, res) => {
  // находим элемент в контактах по id
  // const ind = CONTACTS.findIndex((el) => el.id = req.params.id);
  // CONTACTS[ind] = req.body;
  // res.json(CONTACTS[ind]);
  res.json({});
};

// important
const redirectToEntry = (req, res) => {
  res.redirect('/');
};
// important

module.exports = {
  redirectToEntry,
  getContacts,
  postContacts,
  deleteContacts,
  putContacts
};
