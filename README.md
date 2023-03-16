# Test Project - Task List Manager - Ignacio Diaz

This test project has a **hard deadline** of 10 hours. It is not required to complete it 100%, as the main idea is to evaluate the way you prioritize tasks.

However, of course, it is better if you can complete it all.

## Requirements

The project language is German. In order to translate the texts, it is recommended to use, https://www.deepl.com.

You are free to choose which technology to go for, but it is recommended to use either ReactJS or NextJS. You may choose either Typescript or Javascript, but do keep in mind that developing in Javascript is faster.

For the database, you are completely free to choose (MongoDB, MySQL, PostgreSQL, etc).

Design is optional. But while the project does not need to look perfect, it is preferable to stay out of "Notepad style". It is also perfectly fine to use Bootstrap, Bulma, Materialize, etc.

Everywhere where there is a form, a basic validation needs to be in place. This does not mean that complex validations need to be implemented. But, for example, when creating Users, it is important for two users not to be able to have the same email, or for a user to have an empty email address.

Also, since everything happens behind a login wall, there must be a CLI command (in the `npm run insert:root:user` format or similar) to enter a user to be able to start using the project.

## Project Description

The project consists first of a **Login**, with email and password.

After logging in, the users should land on an interface with a navigation

- My Account
- Users
- Tasks
- My Tasks
- Logout

By default, users need to land on "My Tasks" after logging in.

### My account

Should be a form to update their email and password.

### Users

Basic CRUD of Users.

Each user contains:

- email
- password

Of course, the password needs to be encrypted and not stored in plain text.

### Tasks

Basic CRUD of Tasks.

Each task contains:

- title
- description (textarea)
- due date (date picker. Can be left blank, meaning, no due date)
- assigned to (any of the users. Can be left blank, meaning, assigned to nobody)
- is completed (boolean)
- items

Whereas **items** is a collection of items, each of them simply contains:

- title
- is completed

### My Tasks

List of Tasks assigned to the user that's currently logged in, sorted by due date (the ones with no due date go last)

### Logout

Destroy the session and redirects to the **Login** form

## Instructions

In case, after developing this, any extra steps (other than `git clone <repo> && cd <folder> && npm install && npm run start` is necessary, please list those steps here).

Since I created the client and server folders, I had to install the dependencies in both folders. I also had to install concurrently in the root folder to run both servers at the same time.

To run in development mode, run `npm run dev` in the root folder. Ask me for the .env file.
