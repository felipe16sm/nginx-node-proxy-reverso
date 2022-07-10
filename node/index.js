const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const { v4 } = require("uuid");
const mysql = require("mysql");
const PORT = 3000;

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  const sqlCreateTablePeople = `CREATE TABLE IF NOT EXISTS people(id varchar(36) not null, name varchar(255) not null, PRIMARY KEY(id));`;
  const sqlQueryInsertPerson = `INSERT INTO people (id,name) VALUES ('${v4()}','${faker.name.findName()}');`;
  const sqlQuerySearchPeople = "SELECT * from people;";

  const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
  });

  connection.connect();

  connection.query(sqlCreateTablePeople, function (error) {
    if (error) throw error;
  });

  connection.query(sqlQueryInsertPerson, function (error) {
    if (error) throw error;
  });

  connection.query(sqlQuerySearchPeople, function (error, results) {
    if (error) throw error;
    let title = `<h1 align="center">Full Cycle Rocks!</h1><br/>`;
    let peopleTableData = "";

    peopleTableData = results
      .map((person) => {
        return `<tr>
                  <td>${person.id}</td>
                  <td>${person.name}</td>
                </tr>`;
      })
      .join("");

    let table = `<div align="center">
                    <table>
                      <tr><th>id</th>
                      <th>Name</th></tr>
                      <tbody>${peopleTableData}</tbody>
                    </table>
                  </div>`;

    res.status(200).send(`${title}${table}`);
  });

  connection.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
