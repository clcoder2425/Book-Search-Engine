# Book-Search-Engine
## Description
This project refactor Google Books API search engine built with a RESTful API, into  a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. With this app users are able to search for books, save books and delete saved books.

## User Story and Acceptance Criteria
#### User Story
`AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase`

#### Acceptance Criteria
`GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  `

## Table of Contents 
- [Description](#Description)
- [User-story&Acceptance-criteria](#User-Story&Acceptance-Criteria)
- [Refactor Process](#Refactor-Process)
- [Web-Page-Preview](#Web-Page-Preview)
- [Installation](#Installation)
- [Usage](#Usage)
- [Skill-Improved](#Skill-Improved)
- [Technologies](#Technologies)
- [Authors](#Authors)
- [Credits](#credits)

## Refactor Process
To fulfill the Challenge, you’ll need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy the application to Render.

## Web Page Preview
![Web-Preview](./client/src/assets/booksearchhome.JPG)
![Saved-Books](./client/src/assets/booksearch.JPG)

## Installation
- Install dependencies: `npm install`
- Set up enviroment variables: Create a `.env` file in the root directory, use the guide on the `.env.example` file.
- Start the server using the command: `npm run develop`


## Usage

Render deployed link:https://book-search-engine-mfrg.onrender.com

    
## Skills Improved
- Javascript
- Node.js
- Express.js
- Using .env
- Mongodb
- Graphql
- TypeDefs and resolver
- React

## Technologies
 - [JavaScript](#JavaScript)
 - [apollo/client](#https://www.npmjs.com/package/@apollo/client)
 - [Express.js](#https://www.npmjs.com/package/express)
 - [dotenv](#https://www.npmjs.com/package/dotenv)
 - [Graphql](#https://www.npmjs.com/package/graphql)
 - [Mongodb Driver](#https://www.npmjs.com/package/mongodb)
 - [Nodemon](#https://www.npmjs.com/package/nodemon?activeTab=versions)

## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Authors
  Carmen Jimenez

  Githublink:  https://github.com/clcoder2425/Book-Search-Engine.git

## Credits
- Calenly tutoring team
- Render deployment guide: https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide