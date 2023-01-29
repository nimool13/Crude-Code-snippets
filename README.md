# Crude-Code-snippets
Description of the task:
The application in Node.js will use Express as the application framework and Mongoose as the object modeling library. The application must have full CRUD functionality regarding snippets, whereby a user must be able to create, read, update and delete snippets.

Users must be able to register and login to the application after entering a username and a password. A user cannot register an already existing username because the username must be unique to the application. A logged in user must be able to log out of the application.

Anonymous users should only be able to view snippets. Authenticated users, in addition to view snippets, must also be able to create, edit and delete their snippets. No one but the authenticated user should be able to create, edit and delete their snippets. Because of this, the application must support some basic authentication and authorization. On the server-side you may only use plain session storage, using the express-session package, to implement authentication and authorization. You must not use any packages such as Passport, etc., to authenticate or authorize.

When writing and presenting snippets, the application must support multiline text, enabling the user to write real code snippets, not just a one-line text string.

The application should be easy to understand, meaning that the users should get clear notifications on what is going on in the application (eg. using flash messages).

If a user tries to access a resource that requires the user to be logged in, the application must return the status code 403 (Forbidden). Of course, when necessary, the application must also return the status code 404 (Not Found) as well as 500 (Internal Server Error).

As far as possible, the application must be protected from vulnerable attacks. Be prepared to explain and defend your solution at the oral hearing.

As always, we have the following requirements:

The application should be written as a JavaScript application following the JavaScript Standard Style code standard, using the Express API, running on the Node.js platform.
