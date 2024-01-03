var db = require("../database-mysql");

let getdata = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * from rappelles where users_id=?`;
    db.query(sql, [id], (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  };

  let insertrappellesdata = (req, res) => {
    let {
      title,
      description,
      deadline,
      users_id
    } = req.body;
    const createdAt = new Date().toISOString().split('T')[0];
    const isUnRead = "false";
  
    // Format the deadline date
    deadline = new Date(deadline).toISOString().split('T')[0];
  
    const sql = `INSERT INTO rappelles (
      createdAt,
      isUnRead,
      title,
      description,
      deadline,
      users_id
    ) VALUES (?,?,?,?,?,?)`;
  
    db.query(
      sql,
      [
        createdAt,
        isUnRead,
        title,
        description,
        deadline,
        users_id
      ],
      (err, result) => {
        if (err) {
          console.error("SQL Error:", err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log("Query Result:", result);
          res.status(200).send(result);
        }
      }
    );
  };
  let deleteRappelleById = (req, res) => {
    const { id } = req.params;
  
    const sql = `DELETE FROM rappelles WHERE id = ?`;
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.affectedRows > 0) {
          res.status(200).send(`Successfully deleted rappelle with id ${id}`);
        } else {
          res.status(404).send(`Rappelle with id ${id} not found`);
        }
      }
    });
  };
  



  module.exports = {
    getdata,
    insertrappellesdata,
    deleteRappelleById,
  };