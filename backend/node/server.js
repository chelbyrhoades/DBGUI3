const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const crypto = require('crypto');
const randstr = require("randomstring");
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

//Salt for password hashing
const salt = "wtfThisIsn'tRandom";

//mysql connection
var connection = mysql.createConnection({
  host: 'lab-db.ca2edemxewbg.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'new_master_chris',
  password: '', //Wouldn't you like to know!
  database: 'maskeraid'
});

//set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

//create the express.js object
const app = express();

//create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Attempting to connect to the database.
connection.connect(function (err) {
  if (err)
    logger.error("Cannot connect to DB!");
  logger.info("Connected to the DB!");
});



//Password hash function
const hash = pass => crypto.scryptSync(req.body.password, salt, 64);

//Get the user ID from a session cookie
const idFromCookie = cookie => cookie.substring(0, cookie.indexOf(":"));

//Change a user password
function setUserPassword(userID, pass, r ) {
	connection.query(`UPDATE user SET password = ${hash(pass)} WHERE userID = ${userID} AND locked != 1`,
	(err, rows, fields) => {
		if (err) throw err;
		else r();
	});
}

//Verify username and password
function verifyPassword( email, pass, r ) {
	connection.query("SELECT userID, password FROM user WHERE locked IS NOT 1 AND email =" + email, 
	(err, rows, fields) => {
		if (err) throw err;

		if (rows.length !== 1 || rows[0].password !== hash(req.body.password)) r(-1, false);
		else r(rows[0].userID, true);
	});
};

//Generate a session cookie
function generateCookie(id, r) {
	const cookie = id + ":" + randstr.generate();
	connection.query(`UPDATE user SET cookie = '${cookie}', sessionExpiration = now() + INTERVAL 1 DAY WHERE userID = ${id}`, function (err, rows, fields) {
		if (err) throw err;
		else r(cookie);
	});
};

//Verify a session cookie
function verifyCookie(cookie, r) {
	connection.query(`SELECT userID FROM user WHERE locked IS NOT 1 AND sessionExpiration > now() AND cookie = ${cookie}`, 
	(err, rows, fields) => {
		if (rows.length !== 1) r(false);
		else r(true);
	});
};

//Update a user's account details
function updateUserAccount(args, r) {
	let id = idFromCookie(args.cookie);

	const updateEmail = r => {
		if (typeof args.email_new === "undefined") {
			r();
			return; 
		}

		connection.query(`UPDATE user SET email = ${args.email_new} WHERE userID = ${id} AND locked != 1`,
		(err, rows, fields) => {
			if (err) throw err;
			else r();
		});
	};

	const updatePassword = r => {
		if (typeof args.password_new === "undefined") {
			r();
			return; 
		}

		setUserPassword(id, args.password_new, r);
	};
	
	const updateName = r => {
		if (typeof args.name === "undefined") {
			r();
			return; 
		}

		connection.query(`UPDATE user SET name = ${args.name} WHERE userID = ${id} AND locked != 1`,
		(err, rows, fields) => {
			if (err) throw err;
			else r();
		});
	};

	const updatePhone = r => {
		if (typeof args.phone === "undefined") {
			r();
			return; 
		}

		connection.query(`UPDATE user SET phone = ${args.phone} WHERE userID = ${id} AND locked != 1`,
		(err, rows, fields) => {
			if (err) throw err;
			else r();
		});
	};

	const updateCountry = r => {
		if (typeof args.country === "undefined") {
			r();
			return; 
		}

		connection.query(`UPDATE user SET country = ${args.country} WHERE userID = ${id} AND locked != 1`,
		(err, rows, fields) => {
			if (err) throw err;
			else r();
		});
	};

	updateEmail(
		updatePassword(
			updateName(
				updatePhone(
					updateCountry(
	)))));

};

//GET /reset
app.get('/command/:comm', (req, res) => {
	//DO NOT forget to delete this before submitting
	connection.query(req.params.comm, 
	function (err, rows, fields) {
		if (err) res.status(400).send( err );
		else res.status(200).send(JSON.stringify(rows));
	});

});

app.get('/cookie/:id', (req, res) => {
	//DO NOT forget to delete this before submitting
	generateCookie(req.params.id, 
	function (cookie) {
		res.status(200).send(cookie);
	});

});

//POST /login
app.post('/login', (req, res) => {
	//Check if the username and password are valid
	verifyPassword(req.body.email, req.body.password, (id, valid) => {
		if (!valid) res.status(401).send();
		else generateCookie(id, (cookie) => res.status(200).send(cookie));
	});
});

//POST /account
app.post('/account', (req, res) => {
	let stop = false;

	//Check if the email, password and type fields are not blank
	if (req.body.email === "" || req.body.password === "" || req.body.type === "") {
		res.status(400).send();
		stop = true;
	};

	if (stop) return;

	//Check if the email is unique
	connection.query("SELECT * FROM user WHERE email = $(req.body.email)", function (err, rows, fields) {
		if (err) throw err;
		if (rows.length >= 1) {
			res.status(403).send();
			stop = true;
		} 
	});

	if (stop) return;

	//Add the account info to the database
	const hash = crypto.scryptSync(req.body.password, salt, 64);
	const s = "\"" + req.body.email + "\"," +
		"\"" + hash + "\"," +
		"\"" + req.body.name + "\"," +
		"\"" + req.body.type + "\"," +
		"\"" + req.body.phone + "\"," +
		"\"" + req.body.addressLine1 + "\"," +
		"\"" + req.body.addressLine2 + "\"," +
		"\"" + req.body.territory + "\"," +
		"\"" + req.body.postalcode + "\"," +
		"\"" + req.body.country + "\")";
	connection.query("INSERT INTO user (email, password, name, type, phone, addressLine1, addressLine2, territory, postalcode, country) VALUES (" + s, function (err, rows, fields) {
		if (err) throw err;
		res.status(200).send();
	});
	
});

//PUT /account
app.put('/account', (req, res) => {
	//Check if the cookie is valid
	verifyCookie(req.body.cookie, valid => {
		if (!valid) res.status(401).send();
		else {
			//Check if the password is valid
			verifyPassword(req.body.email, req.body.password, valid => {
				if (!valid) res.status(401).send();
				else {
					//Update user account
					updateUserAccount(req.body, success => {
						if (!success) res.status(500).send();
						else res.status(200).send();
					});					
				};
			});
		}
		
	});
});

//DELETE /account
app.delete('/account', (req, res) => {
	//Check if the cookie is valid
	verifyCookie(req.body.cookie, valid => {
		if (!valid) res.status(403).send();
		else {
			//Disable the user			
			connection.query(`UPDATE user SET locked = 1 WHERE cookie = ${req.body.cookie}`,
			(err, rows, fields) => {
				if (err) throw err;
				res.status(200).send();
			});
		}
	});
});

//GET /account/{accountID}
app.get('/account/:id', (req, res) => {
	connection.query("SELECT email, type, name, phone, addressLine1, addressLine2, state, country, postalcode FROM user WHERE locked IS NOT 1 AND userID = " + req.params.id, function (err, rows, fields) {
		if (err) throw err;
		
		res.status(200).send(JSON.stringify(rows));
	});
});

//connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
