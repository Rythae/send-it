import dotenv from "dotenv";

dotenv.config();

let connectionString;
if(process.env.NODE_ENV === 'development') {
    connectionString = process.env.DEV_DATABASE_URL;
} 
else if(process.env.NODE_ENV === 'test') {
    connectionString = process.env.TEST_DATABASE_URL;
} 
else {
    connectionString = process.env.DATABASE_URL;
} 

export default connectionString;