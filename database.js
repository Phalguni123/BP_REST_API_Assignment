const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Phalguni@123',
    database : 'EmployeeDB'
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log("DB Connection successful");
    }
    else{
        console.log("DB connection failed n Error : " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mysqlConnection;
