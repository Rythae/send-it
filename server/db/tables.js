import connectionString from "./config";
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

let queryText = `
DROP TABLE IF EXISTS parcels;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "firstname" varchar(100) NOT NULL,
    "lastname" varchar(100),
    "othernames" varchar(100),
    "email" varchar(100) UNIQUE NOT NULL,
    "username" varchar(100),
    "isAdmin" integer,
    "password" varchar(100) NOT NULL,
    "registered" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);
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
    'olivess@sendit-demo.test', 
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
    'olive23@sendit-demo.test', 
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
    'olive3@sendit-demo.test', 
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
INSERT INTO parcels (
    "placedBy",
    "weight",
    "weightMetric",
    "status",
    "from",
    "to",
    "currentLocation"
) VALUES (
    3,
    \'500KG\',
    \'200KG\',
    \'delivered\',
    \'Lagos\',
    \'to\',
    \'Abuja\'
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
    3,
    \'500KG\',
    \'200KG\',
    \'delivered\',
    \'Lagos\',
    \'to\',
    \'Abuja\'
); 
`;


const client = new Pool({ connectionString });

client.on('connect', () => {
    console.log('CONNECTED TO DATABASE');
});

client.query(queryText)
    .then(result => console.log(result))
    .catch(error => console.log(error));
