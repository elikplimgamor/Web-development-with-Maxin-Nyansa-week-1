const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./company.db")
;

rl.question("Enter Employee Id", function (answer) {
    const query = "SELECT first_name,last_name FROM employee WHERE emp_id ="+ String(answer)
    
db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
  
    // Process the query results (rows)
    rows.forEach((row) => {
      console.log("Welcome Dear "+row.first_name+" "+row.last_name);
    });
  });
  
  
  
  // Close the database connection when done
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
  
    
    
    rl.close();
  });

