import connectionString from "./config";
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const createUsersTable = () => {
let queryText = `

      CREATE TABLE IF NOT EXISTS users (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "firstname" varchar(100) NOT NULL,
        "lastname" varchar(100),
        "othernames" varchar(100),
        "email" varchar(100) UNIQUE NOT NULL,
        "username" varchar(100),
        "isAdmin" integer,
        "password" varchar(100) NOT NULL,
        "registered" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (owner_id) REFERENCES users (id) ON DELETE CASCADE
      )`;
      
    
    const createUsersTable = () => {
        let queryText = `
            CREATE TABLE IF NOT EXISTS parcels (
                "id" SERIAL PRIMARY KEY NOT NULL,
                "placedBy" integer NOT NULL,
                "weight" varchar(40),
                "weightMetric" varchar(40),
                "sentOn" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "deliveredOn" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "status" varchar(40) NOT NULL,
                "from" varchar(200) NOT NULL,
                "to" varchar(200) NOT NULL,
                "currentLocation" varchar(200) NOT NULL,
                "updatedAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`;
        


        /**
         * Drop Parcels Table
         */
        const dropParcelsTable = () => {
        const queryText = 'DROP TABLE IF EXISTS parcelss returning *';
        pool.query(queryText)
            .then((res) => {
            console.log(res);
            pool.end();
            })
            .catch((err) => {
            console.log(err);
            pool.end();
            });
        }
        /**
         * Drop User Table
         */
        const dropUserTable = () => {
        const queryText = 'DROP TABLE IF EXISTS users returning *';
        pool.query(queryText)
            .then((res) => {
            console.log(res);
            pool.end();
            })
            .catch((err) => {
            console.log(err);
            pool.end();
            });
        }
        /**
         * Create All Tables
         */
        const createAllTables = () => {
        createUserTable();
        createParcelsTable();
        }
        /**
         * Drop All Tables
         */
        const dropAllTables = () => {
        dropUserTable();
        dropParcelsTable();
        }

        pool.on('remove', () => {
        console.log('client removed');
        process.exit(0);
        });

    
    const seedQueryText = `
        INSERT INTO users (
            "firstname", 
            "lastname",
            "othernames", 
            "email", 
            "username",
            "isAdmin",
            "password"
            ) 
            VALUES (
            'Olivia', 
            'Smith', 
            'Sheila', 
            'olivess@gmail.com', 
            'olishy',
             1,
            \'${bcrypt.hashSync('passkey', 10)}\'
            );

        INSERT INTO users (
            "firstname", 
            "lastname",
            "othernames", 
            "email", 
            "username",
            "isAdmin",
            "password"
            ) 
            VALUES (
            'Olivia', 
            'Smith', 
            'Sheila', 
            'olive23@gmail.com', 
            'olishy',
             0,
            \'${bcrypt.hashSync('passkey', 10)}\'
            );

        INSERT INTO users (
            "firstname", 
            "lastname",
            "othernames", 
            "email", 
            "username",
            "isAdmin",
            "password"
            ) 
            VALUES (
            'Olivia', 
            'Smith', 
            'Sheila', 
            'olive3@gmail.com', 
            'olishy',
             0,
            \'${bcrypt.hashSync('passkey', 10)}\'
            );
        INSERT INTO parcels (
            "placedBy",
            "weight",
            "weightMetric",
            "status",
            "from",
            "to",
            "currentLocation"
        ) VALUES (
            2,
            \'500KG\',
            \'200KG\',
            \'delivered\',
            \'Lagos\',
            \'to\',
            \'Abuja\'
        ); 
        `;

    queryText += seedQueryText;

    const client = new Pool({ connectionString });

    client.on('connect', () => {
        console.log('CONNECTED TO DATABASE');
    });

    client.query(queryText)
      .then(result => console.log(result))
      .catch(error => console.log(error));
