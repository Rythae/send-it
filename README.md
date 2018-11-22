

# send-it #
Send it fast is a delivery service app for a courier
[![Build Status](https://travis-ci.org/Rythae/send-it.svg?branch=develop)](https://travis-ci.org/Rythae/send-it)

# **Getting Started** #
## **Clone the Repo.** ##
Run npm install to install all necessary packages.

Prerequisites
The following tools will be needed to run this application successfully:

# Node v8.11.3 or above #
# Npm v5.6 or above #

# ENDPOINTS $

- GET /api/v1/parcels/:id User can get a specific parcel based on the id passed
- GET /api/v1/parcels/ User get all parcels 
- POST /api/v1/parcels Users can create a new parcel
- PUT //api/v1/parcels/:id Users can update the status of a parcel
- GET /api/v1/users/:id/parcels Users gets all parcels of a single user

#### Installing ####

### On your Local Machine ###

- Pull the develop branch off this repository
- Run npm install to install all dependencies
- Run npm start to start the app
- App runs on port 5090
- Access endpoints on localhost:5090

### On Heroku ###
- Pull the [develop](https://github.com/Rythae/send-it) branch off this repository
- Run npm install to install all dependencies
- Access endpoints on delivery-parcel.herokuapp.com

### Running the tests ###

- Run npm test in the terminal for the cloned folder.

### Break down into end to end tests ###

- It tests the API end-point.
- It tests the REST API functionality

### Built With ###

- Node.js - Runtime-Enviroment

### Authors ###

- Rythae Emili

#### Acknowledgments ####

- The Andela Team
- google.com
- Andela cycle 38
