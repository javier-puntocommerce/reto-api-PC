const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../src/database');

// GET all Users
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// GET all Users Email's characters to count ocurrences
router.get('/email-ocurrences', (req, res) => {
  mysqlConnection.query('SELECT email FROM users', (err, rows) => {
    if(!err) {
      var newObj = '';
      for(var i = 0; i < rows.length; i++){
        if(rows[i].email !== undefined || null || ''){
          newObj += rows[i].email;
        } 
      }
      const str = JSON.stringify(newObj);

      function contarCaracteres(str) {
        str = str.toUpperCase();//Pasamos la cadena a mayusculas
        str = str.replace(/\s/g, "");//quitamos los espacios en blanco
        str = str.replace(/[^a-zA-Z ]/g, "");//quitamos los simbolos
        final = {} //Donde guardamos los resultados
        for(let char in str){ //Tomamos el indice de cada caracter
        if(str[char] in final) { //Si ya existe, simplemente aumentamos el contador
          final[str[char]] = final[str[char]] + 1
        } else { // Si no existe, lo inicializamos a 1
          final[str[char]] = 1
          }
      }
        //Mostar los resultados
        tmp = ``
        Object.keys(final).forEach(function(letra){
          tmp += `${letra}:${final[letra]} `
        })
        return tmp
      }
      console.log(contarCaracteres(str));
      res.json(contarCaracteres(str));

    } else {
      console.log(err);
    }
  });
});



















// GET An User
router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// DELETE An User
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
    if(!err) {
      res.json({status: 'data Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An User
router.post('/', (req, res) => {
  const {id, name, username, email, status} = req.body;
  console.log(id, name, username, email, status);

  mysqlConnection.query("Insert into users (id, name, username, email, status) VALUES ('"+req.body.id+"','"+req.body.name+"','"+req.body.username+"','"+req.body.email+"','"+req.body.status+"')", (err, rows, fields) => {
    if(!err) {
      res.json({status: 'data Saved'});
    } else {
      console.log(err);
    }
  });

});


module.exports = router;
