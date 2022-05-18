const pool = require("../config/db/pool");

const getQuestions = async (req, res, next) => {
  try {
    const response = await pool.query("SELECT * FROM questions;");
    res.send(response.rows);
  } catch (err) {
    console.error(err);
  }
};

const getQuestion = async (req, res, next) => {
  const { id } = req.params;
  try {
    console.log(id);
    const response = await pool.query(
      `SELECT * FROM questions WHERE id = ${id};`
    );
    res.send(response.rows);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getQuestions,
  getQuestion,
};
