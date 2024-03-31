const listAllNotes = (req, res) => {
    res.render('notes/list');
    // res.render('errors/error');
  };
  
  module.exports = {
    listAllNotes
  }