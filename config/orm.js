/** Import (require) `connection.js` into `orm.js`

* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

  * `selectAll()`
  * `insertOne()`
  * `updateOne()`

* Export the ORM object in `module.exports`.
*/


const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(whatToSelect, table, orderCol) {
    const queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    const queryString =
      "UPDATE ?? SET burger_name = ? WHERE id = ?;";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};



module.exports = orm;
