# Note Taker Application

  ## Description

This application provides the user with a means by which to store notes for organisational and planning purposes, from a professional small business owner perspective.

My task was to connect the frontend of this application (provided as starter code) to the backend through the use of Express.js, along with the saving and retrieval of note data from a JSON file used in lieu of an actual database. This required getting to grips with routing and the handling of some of the key concepts behind CRUD operations: namely, how to handle GET, and POST requests. These requests are made by the user through the front-end UI. 

These routes were tested using a desktop application called Insomnia that allows a user to test and debug API routes without the need for a front-end UI. 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  * [Licence](#licence)
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Deployed Application](#deployed-application)
  * [Questions](#questions)
  
## License

This application has the following licence:

MIT License

[Link to licence](https://opensource.org/licenses/MIT)

## Installation
    
  Follow the following steps to properly install this application:


  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

  * This command line application makes use of the following two dependencies:

  * Uses the [express package](https://www.npmjs.com/package/express).

  * Uses the [uuid package](https://www.npmjs.com/package/uuid) for a suite of unit tests.

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i express
```
```bash
npm i uuid
```
  * And finally: 
  
  Our use of Express as a minimalist web framework for routing requires a server running for it to function as intended.

  Please type the following command within the terminal to invoke the application:

```bash
node server.js
```
A message should then display in the command line saying "App listening at http://localhost:3001".

With confirmation that the server is launched from the backend, the browser can now provide full functionality for the application from the front-end. You can command and click the hyperlink to http://localhost:3001 to navigate straight to the front-end.

## Screenshots

![Front End](./assets/images/Before%20note%20addition.png)

![Note Creation](./assets/images/Add%20Note.png)

![Note Added](./assets/images/Note%20Added.png)

## Deployed Application

https://noke-take-application-c10c6b265024.herokuapp.com/
      
## Questions
      
  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)