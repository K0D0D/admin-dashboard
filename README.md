<h1 align="center">
    <br>
    <a href="https://darly.solutions">
        <img 
            src="https://user-images.githubusercontent.com/87868068/204385622-b935a880-4f1e-4165-bdc9-614db0e1bcbc.png" 
            alt="Darly Solutions logo" 
        />
    </a>
    <br>
    Darly Solutions Front-End Task
    <br>
</h1>

<h4 align="center">
    An admin dashboard template made with React, TypeScript, Tailwind CSS, and JSON Server
</h4>

<p align="center">
    <a href="#-assignment">Assignment</a> •
    <a href="#-requirements">Requirements</a> •
    <a href="#-technologies">Technologies</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-screenshots">Screenshots</a> •
    <a href="#-license">License</a>
</p>

## 🎯 Assignment

You need to write a small application in React + Typescript. The application is written only through function components and hooks, it is forbidden to use classes.

## 🚩 Requirements

+ Create a table that can contain an arbitrary number of rows (from 5 to 15)
+ The data in the table must be loaded from the server
+ Use "Infinite Loader" to load new data
+ State manager (or lack thereof, justify the choice or lack of a tool)
+ In the form of creating a new record in the table, there must be at least 5 inputs
  + Keep in mind that there can be any number of rows
  + Inputs must contain validation (at least mandatory or complex like a valid email address)
  + Must have appropriate checks before submitting (disable buttons or others)
  + The server may not accept the form and return errors (you may not implement it, but describe the implementation)
+ The form must be submitted via the API. The entry is made in the table
+ Add any animation (for example popup with a form, use something more complicated than simple CSS animations)
+ Upload code to GitHub.

## 🔧 Technologies

- React
- React-Query
- TypeScript
- Tailwind CSS
- JSON Server

## 🔌 Installation

- Clone this repo
```bash
git clone https://github.com/K0D0D/admin-dashboard.git
```
- Go to the project directory
```bash
cd admin-dashboard
```
- Install npm dependencies
```bash
npm i
```
- Add the server URL to the .env.local file in the project directory (http://localhost:3000 by default)
```bash
REACT_APP_API_URL=YOUR_REACT_APP_API_URL
```

##  💻 Usage

- start the JSON Server
```bash
npx json-server -w data/db.json
```
- start the Create React App server
```bash
npm start
```
- build the project
```bash
npm run build
```

## 📷 Screenshots

**Initial data loading**
![Screenshot of initial data loading](https://user-images.githubusercontent.com/87868068/204395195-0fa77e62-52f1-4c6b-b693-bf821d311706.png)
<br/>

**Users table**
![Screenshot of users table](https://user-images.githubusercontent.com/87868068/204395459-618d93b3-b3ff-4c81-814e-bd174be9610d.png)
<br/>

**Add user form**
![Screenshot of add user form](https://user-images.githubusercontent.com/87868068/204399831-ff714571-37d7-4dfb-8da0-b9c253ad892f.png)
<br/>

**Fields validation**
![Screenshot of fields validation](https://user-images.githubusercontent.com/87868068/204400099-db8c0122-e027-4c98-80fd-bc616ec5f7a0.png)
<br/>

## 🔑 License

[MIT](https://github.com/K0D0D/unsplash-clone/blob/master/LICENSE.md)
