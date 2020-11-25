var express = require('express');
var router = express.Router();
const database = require("./database");
const Response = require("./response");

this.response = new Response();

//Get all employees
router.get('/getUsers', (req, res) => {
    database.query('SELECT * FROM employee', (err, rows, fields) => {
        let returnValue = "";
        let self = this;
        if(!err){
            returnValue = self.response.success(rows);
            res.send(returnValue);
        }
        else{
            returnValue = self.response.failure("Error getting all users");
            res.send(returnValue);
        }
    })
});

//Add new user
router.post('/addUser', (req,res) => {
    database.query('INSERT INTO Employee SET ?', [req.body], (err, rows, fields) => {
        let returnValue = "";
        let self = this;
        if(!err){
            returnValue = self.response.success(rows);
            res.send(returnValue);
        }
        else{
            returnValue = self.response.failure("Error adding new user");
            res.send(returnValue);
        }
    })
});

//Update Existing User
router.put('/updateUser', (req,res) => {
    database.query('UPDATE Employee SET `FirstName`=?, `LastName`=?, `Address`=?, `OrgName`=?,`Salary`=? WHERE `EmpID`=?', [req.body.FirstName, req.body.LastName, req.body.Address, req.body.OrgName, req.body.Salary, req.body.EmpID], (err, rows, fields) => {
        let returnValue = "";
        let self = this;
        if(!err){
            returnValue = self.response.success(rows);
            res.send(returnValue);
        }
        else{
            returnValue = self.response.failure("Error updating user");
            res.send(returnValue);
        }
    })
});

//Delete user from table
router.delete('/deleteUser/:id', (req,res) => {
    database.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        let returnValue = "";
        let self = this;
        if(!err){
            returnValue = self.response.success(rows);
            res.send(returnValue);
        }
        else{
            returnValue = self.response.failure("Error deleting user");
            res.send(returnValue);
        }
    })
});

//Get user details by ID
router.get('/getUser/:id', (req,res) => {
    database.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        let returnValue = "";
        let self = this;
        if(!err){
            returnValue = self.response.success(rows);
            res.send(returnValue);
        }
        else{
            returnValue = self.response.failure("Error getting user id");
            res.send(returnValue);
        }
    })
});

module.exports = router;
