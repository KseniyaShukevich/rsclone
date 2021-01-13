const CONTACTS = [
    {id: 1, name: 'ssf', value: 'AAAAAAAAAAAf'}
  ];

const getContacts = (req, res) => {
    res.json(CONTACTS);
  }

const postContacts = (req, res) => {
    const contact = {... req.body, test: 1};
    CONTACTS.push(contact);
    res.status(201).json(contact);
  }

const deleteContacts = (req, res) => {
    // do delete
    const id = req.params.id;

    res.json({message: `Контакт был удален, ${id}`});
  }

const putContacts = (req, res) => {
    // находим элемент в контактах по id
    const ind = CONTACTS.findIndex((el) => el.id = req.params.id);
    CONTACTS[ind] = req.body;
    res.json(CONTACTS[ind]);
  }

module.exports = {
    getContacts,
    postContacts,
    deleteContacts,
    putContacts,
}